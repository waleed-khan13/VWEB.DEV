import os

base_path = r"C:\Users\rajaw\OneDrive\Desktop\VWEB.DEV"

# Simple text replacements
fixes = [
    ("src/app/admin/page.tsx", "Let's look at the numbers:", "Let&apos;s look at the numbers:"),
    ("src/app/admin/profile/page.tsx", "Let's get started", "Let&apos;s get started"),
    ("src/app/clients/page.tsx", "Let's start", "Let&apos;s start"),
    ("src/app/contact/ContactPageContent.tsx", "Let's create", "Let&apos;s create"),
    ("src/app/not-found.tsx", "We can't find", "We can&apos;t find"),
    ("src/app/not-found.tsx", "you're looking", "you&apos;re looking"),
    ("src/app/quote-estimator/page.tsx", "Let's build", "Let&apos;s build"),
    ("src/components/auth/ProtectedRoute.tsx", "You're not", "You&apos;re not"),
    ("src/components/sections/contact-section.tsx", "We're here", "We&apos;re here"),
    ("src/components/sections/contact-section.tsx", "Let's discuss", "Let&apos;s discuss"),
    ("src/components/sections/contact-section.tsx", "Let's build", "Let&apos;s build"),
    ("src/components/sections/projects-section.tsx", "We've built", "We&apos;ve built"),
    ("src/components/sections/realm-section.tsx", "We don't just", "We don&apos;t just"),
    ("src/components/sections/realm-section.tsx", "we're your", "we&apos;re your"),
]

count = 0
for file_rel, old_text, new_text in fixes:
    file_path = os.path.join(base_path, file_rel)
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if old_text in content:
            modified = content.replace(old_text, new_text)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(modified)
            print(f"Fixed: {file_rel}")
            count += 1
    except Exception as e:
        print(f"Error: {file_rel} - {e}")

print(f"\nTotal fixes applied: {count}")
