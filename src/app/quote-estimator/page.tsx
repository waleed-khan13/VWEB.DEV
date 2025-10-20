

"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { DollarSign, ArrowRight, ArrowLeft, RefreshCw, Bot } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { realms, Realm } from "@/lib/realms";
import { useCurrency } from "@/context/currency-context";
import { CurrencySwitcher } from "@/components/layout/currency-switcher";
import Link from "next/link";
import { baseCosts, complexityLevels, timelineUrgency, dynamicQuestions, serviceIcons, subServiceIcons } from "@/lib/estimator-questions";


const TotalSteps = 6;

export default function QuoteEstimatorPage() {
  const { currency, formatPrice } = useCurrency();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedSubService, setSelectedSubService] = useState('');
  const [selectedFunnel, setSelectedFunnel] = useState('');
  const [projectComplexity, setProjectComplexity] = useState('moderate');
  const [dynamicAnswers, setDynamicAnswers] = useState<any>({});
  const [timeline, setTimeline] = useState('standard');
  const [customization, setCustomization] = useState(50);
  const [projectDescription, setProjectDescription] = useState('');
  const [estimate, setEstimate] = useState({ min: 0, max: 0 });

  const subServices = realms.find(p => p.slug === selectedService)?.sections || [];
  const funnels = Object.keys(dynamicQuestions[selectedSubService] || {});
  const currentQuestions = (dynamicQuestions[selectedSubService] && dynamicQuestions[selectedSubService][selectedFunnel]) || [];

  useEffect(() => {
    if (step >= 4) { // Start calculating from the features step
      calculateEstimate();
    }
  }, [dynamicAnswers, projectComplexity, timeline, customization, step, currency.code]);
  
  const handleDynamicAnswerChange = (questionId: string, value: string | boolean, type: 'radio' | 'checkbox') => {
      setDynamicAnswers((prev: any) => {
          const newAnswers = {...prev};
          if (type === 'checkbox') {
              if (value) {
                  newAnswers[questionId] = true;
              } else {
                  delete newAnswers[questionId];
                  const question = findQuestionById(questionId);
                  if (question && question.subFeatures) {
                      question.subFeatures.forEach((sub: any) => {
                          delete newAnswers[sub.id];
                      });
                  }
              }
          } else {
              newAnswers[questionId] = value;
          }
          return newAnswers;
      });
  };

  const findQuestionById = (id: string): any => {
    for (const subService of Object.values(dynamicQuestions as any)) {
        for (const funnel of Object.values(subService as any)) {
            for (const question of funnel as any[]) {
                if (question.id === id) return question;
                if (question.subFeatures) {
                    const subFeature = question.subFeatures.find((sf: any) => sf.id === id);
                    if (subFeature) return subFeature;
                }
            }
        }
    }
    return null;
  }

  const calculateEstimate = () => {
      let totalCost = baseCosts[selectedService as keyof typeof baseCosts] || 0;

      const complexity = complexityLevels.find(c => c.id === projectComplexity);
      if (complexity) {
          totalCost *= complexity.multiplier;
      }

      Object.keys(dynamicAnswers).forEach(questionId => {
        if(dynamicAnswers[questionId]){
            const question = findQuestionById(questionId);
            if(question && question.cost){
                 totalCost += question.cost;
            }
        }
      });
      
      const timelineMod = timelineUrgency.find(t => t.id === timeline);
      if(timelineMod) {
          totalCost *= timelineMod.multiplier;
      }

      totalCost *= (1 + (customization / 100) * 0.5);

      const min = totalCost * 0.8;
      const max = totalCost * 1.2;
      setEstimate({ min, max });
  };

  const handleNextStep = () => {
    if (step < TotalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedService('');
    setSelectedSubService('');
    setSelectedFunnel('');
    setProjectComplexity('moderate');
    setDynamicAnswers({});
    setTimeline('standard');
    setCustomization(50);
    setProjectDescription('');
    setEstimate({ min: 0, max: 0 });
  };

  const generateQuoteUrl = () => {
    const mainService = realms.find(p => p.slug === selectedService)?.title || '';
    const selectedFeatures = Object.keys(dynamicAnswers).map(id => findQuestionById(id)?.name).filter(Boolean);
    
    const estimateString = `Estimated Budget: ${formatPrice(estimate.min)} - ${formatPrice(estimate.max)} (${currency.code})`;

    const summary = `
    Project Estimate Details:
    - Service: ${mainService}
    - Sub-Service: ${selectedSubService}
    - Specialization: ${selectedFunnel || 'N/A'}
    - Selected Features: ${selectedFeatures.join(', ') || 'N/A'}
    - Complexity: ${projectComplexity}
    - Timeline: ${timeline}
    - Customization Level: ${customization}%
    - Estimate: ${formatPrice(estimate.min)} - ${formatPrice(estimate.max)}
    
    Additional Details:
    ${projectDescription}
    `;

    const params = new URLSearchParams({
        service: mainService,
        deliverables: JSON.stringify([selectedSubService, ...selectedFeatures]),
        budget: `${estimate.min}-${estimate.max}`,
        timeline,
        message: summary,
    });
    
    return `/contact?${params.toString()}`;
  }
  
  const progress = (step / TotalSteps) * 100;
  
  const StepIndicator = () => (
    <div className="w-full bg-muted rounded-full h-2.5 mb-12">
        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}></div>
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
            <CardHeader>
              <CardTitle>What service are you looking for?</CardTitle>
              <CardDescription>Select the primary service you need for your project.</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedService} onValueChange={(val) => { setSelectedSubService(''); setSelectedFunnel(''); setSelectedService(val); }} className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {realms.map(realm => {
                  const Icon = serviceIcons[realm.slug];
                  return (
                    <Label key={realm.slug} htmlFor={realm.slug} className={cn("flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all", selectedService === realm.slug ? "border-primary bg-primary/10" : "border-border hover:border-primary/50")}>
                      <RadioGroupItem value={realm.slug} id={realm.slug} className="sr-only" />
                      <Icon className="w-10 h-10 mb-2 text-primary" />
                      <span className="font-semibold">{realm.title}</span>
                    </Label>
                  )
                })}
              </RadioGroup>
            </CardContent>
          </motion.div>
        );
      case 2:
        return (
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
            <CardHeader>
              <CardTitle>What specific service do you need?</CardTitle>
              <CardDescription>Choose a sub-category for more accurate pricing.</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedSubService} onValueChange={(val) => { setSelectedFunnel(''); setSelectedSubService(val); }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subServices.map(section => {
                  const Icon = subServiceIcons[section.sectionTitle];
                  return (
                    <Label key={section.sectionTitle} htmlFor={section.sectionTitle} className={cn("flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all", selectedSubService === section.sectionTitle ? "border-primary bg-primary/10" : "border-border hover:border-primary/50")}>
                      <RadioGroupItem value={section.sectionTitle} id={section.sectionTitle} className="sr-only" />
                      <Icon className="w-6 h-6 mr-4 text-primary" />
                      <span className="font-semibold">{section.sectionTitle}</span>
                    </Label>
                  )
                })}
              </RadioGroup>
            </CardContent>
          </motion.div>
        );
       case 3:
        if (funnels.length === 0) {
            setStep(4);
            return null;
        }
        return (
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
            <CardHeader>
              <CardTitle>Choose a Specialization</CardTitle>
              <CardDescription>Select a focus area for your project.</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedFunnel} onValueChange={setSelectedFunnel} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {funnels.map(funnel => (
                  <Label key={funnel} htmlFor={funnel} className={cn("flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all", selectedFunnel === funnel ? "border-primary bg-primary/10" : "border-border hover:border-primary/50")}>
                    <RadioGroupItem value={funnel} id={funnel} className="sr-only" />
                    <span className="font-semibold">{funnel}</span>
                  </Label>
                ))}
              </RadioGroup>
            </CardContent>
          </motion.div>
        );
      case 4:
        if (funnels.length > 0 && currentQuestions.length === 0 && selectedFunnel !== '') {
            setStep(5);
            return null;
        }
         if (funnels.length === 0 && currentQuestions.length === 0) {
            setStep(5);
            return null;
        }
        return (
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
            <CardHeader>
              <CardTitle>Project Features</CardTitle>
              <CardDescription>Select the features relevant to your project. The estimate will update in real-time.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {currentQuestions.length > 0 ? currentQuestions.map((q: any) => (
                <div key={q.id} className="rounded-lg border border-border transition-all">
                  <Label htmlFor={q.id} className={cn("flex items-start p-3 cursor-pointer transition-all w-full", dynamicAnswers[q.id] ? "bg-primary/10" : "hover:bg-muted/50")}>
                      <Checkbox
                          id={q.id}
                          checked={!!dynamicAnswers[q.id]}
                          onCheckedChange={(checked) => handleDynamicAnswerChange(q.id, !!checked, 'checkbox')}
                          className="mt-1"
                      />
                      <div className="ml-3 flex-grow">
                          <span className="font-medium text-sm w-full cursor-pointer">{q.name}</span>
                          {q.description && <p className="text-xs text-muted-foreground mt-1">{q.description}</p>}
                      </div>
                      <div className="ml-4 font-semibold text-sm text-primary">
                          {formatPrice(q.cost)}
                      </div>
                  </Label>
                  <AnimatePresence>
                  {dynamicAnswers[q.id] && q.subFeatures && (
                      <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-8 pr-3 pb-3 space-y-2 bg-primary/5 border-t border-primary/20 overflow-hidden"
                      >
                          {q.subFeatures.map((sub: any) => (
                               <Label key={sub.id} htmlFor={sub.id} className="flex items-start p-2 rounded-lg cursor-pointer transition-all hover:bg-primary/10">
                                  <Checkbox
                                      id={sub.id}
                                      checked={!!dynamicAnswers[sub.id]}
                                      onCheckedChange={(checked) => handleDynamicAnswerChange(sub.id, !!checked, 'checkbox')}
                                      className="mt-1"
                                  />
                                   <div className="ml-3 flex-grow">
                                    <span className="font-medium text-xs w-full cursor-pointer">{sub.name}</span>
                                    {sub.description && <p className="text-xs text-muted-foreground mt-1">{sub.description}</p>}
                                   </div>
                                    <div className="ml-4 font-semibold text-xs text-primary">
                                       {formatPrice(sub.cost)}
                                    </div>
                              </Label>
                          ))}
                      </motion.div>
                  )}
                  </AnimatePresence>
                </div>
              )) : (
                <p className="text-muted-foreground">No specific features to select for this service. Click Next to continue.</p>
              )}
            </CardContent>
          </motion.div>
        );
      case 5:
        return (
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
            <CardHeader>
              <CardTitle>What is the project&apos;s complexity?</CardTitle>
              <CardDescription>This helps us understand the scope and scale.</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={projectComplexity} onValueChange={setProjectComplexity} className="space-y-2">
                {complexityLevels.map(level => (
                  <Label key={level.id} htmlFor={`complexity-${level.id}`} className={cn("flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all", projectComplexity === level.id ? "border-primary bg-primary/10" : "border-border hover:border-primary/50")}>
                    <RadioGroupItem value={level.id} id={`complexity-${level.id}`} />
                    <span className="ml-4 font-semibold">{level.name}</span>
                  </Label>
                ))}
              </RadioGroup>
            </CardContent>
          </motion.div>
        );
      case 6:
         return (
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
            <CardHeader>
              <CardTitle>Timeline, Customization & Details</CardTitle>
              <CardDescription>Final touches to refine your estimate.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
                <div>
                    <Label className="font-semibold text-base">Timeline Urgency</Label>
                    <RadioGroup value={timeline} onValueChange={setTimeline} className="mt-4 space-y-2">
                        {timelineUrgency.map(level => (
                          <Label key={level.id} htmlFor={`timeline-${level.id}`} className={cn("flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all", timeline === level.id ? "border-primary bg-primary/10" : "border-border hover:border-primary/50")}>
                            <RadioGroupItem value={level.id} id={`timeline-${level.id}`} />
                            <span className="ml-4 font-semibold">{level.name}</span>
                          </Label>
                        ))}
                    </RadioGroup>
                </div>
                <div>
                    <Label htmlFor="customization" className="font-semibold text-base">Level of Customization</Label>
                    <div className="flex items-center gap-4 mt-4">
                        <span className="text-sm text-muted-foreground">Template</span>
                        <Slider
                            id="customization"
                            value={[customization]}
                            onValueChange={(value) => setCustomization(value[0])}
                            max={100}
                            step={1}
                            className="w-full"
                        />
                         <span className="text-sm text-muted-foreground">Fully Bespoke</span>
                    </div>
                </div>
                 <div>
                    <Label htmlFor="projectDescription" className="font-semibold text-base">Project Description</Label>
                    <Textarea
                        id="projectDescription"
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        placeholder="Briefly describe your project, goals, or any specific requirements."
                        className="mt-4 min-h-[100px]"
                    />
                </div>
            </CardContent>
          </motion.div>
        );
    }
  };
  
  const isNextDisabled = () => {
    if (step === 1 && !selectedService) return true;
    if (step === 2 && !selectedSubService) return true;
    if (step === 3 && funnels.length > 0 && !selectedFunnel) return true;
    return false;
  }

  const LiveEstimateCard = () => (
    <Card className="sticky top-24">
        <CardHeader>
            <CardTitle>Live Estimate</CardTitle>
            <CardDescription>Your estimated cost will update here as you make selections.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex items-center justify-center bg-primary/10 border-2 border-dashed border-primary/50 rounded-lg p-6">
                <span className="font-headline text-3xl font-bold">
                {formatPrice(estimate.min)} - {formatPrice(estimate.max)}
                </span>
            </div>
            <p className="text-muted-foreground text-xs text-center mt-2">
                This is a preliminary estimate and does not include taxes or third-party fees.
            </p>
        </CardContent>
        <CardFooter className="flex-col gap-4">
             <Button asChild size="lg" className="w-full">
                <Link href={generateQuoteUrl()}>Get a Formal Quote</Link>
             </Button>
             <Button variant="ghost" className="w-full" onClick={handleReset}>
                <RefreshCw className="mr-2 h-4 w-4" /> Start Over
            </Button>
        </CardFooter>
    </Card>
  )

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-4">
                 <Bot className="w-16 h-16 text-primary mb-4 inline-block animate-float" />
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
                Quotation Estimator
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
                Get a ballpark estimate for your project in just a few steps.
            </p>
            <div className="mt-8 flex justify-center">
              <CurrencySwitcher />
            </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
                <Card className="overflow-hidden">
                    <div className="p-6">
                        <StepIndicator />
                    </div>
                    <AnimatePresence mode="wait">
                        {renderStep()}
                    </AnimatePresence>
                    <CardFooter className="flex justify-between border-t pt-6">
                        <Button variant="outline" onClick={handlePrevStep} disabled={step === 1}>
                            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                        </Button>
                        {step < TotalSteps ? (
                            <Button onClick={handleNextStep} disabled={isNextDisabled()}>
                                Next <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        ) : (
                             <Button asChild>
                                <Link href={generateQuoteUrl()}>Finish & Get Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                             </Button>
                        )}
                    </CardFooter>
                </Card>
            </div>
            <div className="lg:col-span-1">
                <AnimatePresence>
                 {step >= 4 && (
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                       <LiveEstimateCard />
                    </motion.div>
                 )}
                </AnimatePresence>
            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
