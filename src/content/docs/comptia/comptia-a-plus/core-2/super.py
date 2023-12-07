import os

# Define the structure of topics and subtopics
topics = {
    "1.0 - Operating Systems": [
        "1.1 - An Overview of Windows",
        "1.1 - Windows Upgrades",
        "1.2 - Windows Command Line Tools",
        "1.2 - The Windows Network Command Line",
        "1.3 - Task Manager",
        "1.3 - The Microsoft Management Console",
        "1.3 - Additional Windows Tools",
        "1.4 - The Windows Control Panel",
        "1.5 - Windows Settings",
        "1.6 - Windows Network Technologies",
        "1.6 - Configuring Windows Firewall",
        "1.6 - Windows IP Address Configuration",
        "1.6 - Windows Network Connections",
        "1.7 - Installing Applications",
        "1.8 - Operating System Overview",
        "1.9 - Installing Operating Systems",
        "1.9 - Upgrading Windows",
        "1.10 - macOS Overview",
        "1.10 - macOS System Preferences",
        "1.10 - macOS Features",
        "1.11 - Linux Commands",
        "1.11 - Linux Features",
    ],
    "2.0 - Security": [
        "2.1 - Physical Security",
        "2.1 - Physical Security for Staff",
        "2.1 - Logical Security",
        "2.1 - Active Directory",
        "2.2 - Wireless Encryption",
        "2.2 - Authentication Methods",
        "2.3 - Malware",
        "2.3 - Anti-Malware Tools",
        "2.4 - Social Engineering",
        "2.4 - Denial of Service",
        "2.4 - Zero-Day Attacks",
        "2.4 - On-Path Attacks",
        "2.4 - Password Attacks",
        "2.4 - Insider Threats",
        "2.4 - SQL Injection",
        "2.4 - Cross-site Scripting",
        "2.4 - Security Vulnerabilities",
        "2.5 - Defender Antivirus",
        "2.5 - Windows Firewall",
        "2.5 - Windows Security Settings",
        "2.6 - Security Best Practices",
        "2.7 - Mobile Device Security",
        "2.8 - Data Destruction",
        "2.9 - Securing a SOHO Network",
        "2.10 - Browser Security",
    ],
    "3.0 - Software Troubleshooting": [
        "3.1 - Troubleshooting Windows",
        "3.1 - Troubleshooting Solutions",
        "3.2 - Troubleshooting Security Issues",
        "3.3 - Removing Malware",
        "3.4 - Troubleshooting Mobile Devices",
        "3.5 - Troubleshooting Mobile Device Security",
    ],
    "4.0 - Operational Procedures": [
        "4.1 - Ticketing Systems",
        "4.1 - Asset Management",
        "4.1 - Document Types",
        "4.2 - Change Management",
        "4.3 - Managing Backups",
        "4.4 - Managing Electrostatic Discharge",
        "4.4 - Safety Procedures",
        "4.5 - Environmental Impacts",
        "4.6 - Privacy, Licensing, and Policies",
        "4.7 - Communication",
        "4.7 - Professionalism",
        "4.8 - Scripting Languages",
        "4.8 - Scripting Use Cases",
        "4.9 - Remote Access",
    ],
}


# Function to create folders and files
def create_folders_and_files():
    for topic, subtopics in topics.items():
        # Create a directory for the main topic
        os.makedirs(topic, exist_ok=True)
        for subtopic in subtopics:
            # Create a .mdx file for each subtopic
            filename = f"{topic}/{subtopic}.mdx"
            with open(filename, "w") as file:
                # Write the front matter
                file.write(f"---\n")
                file.write(f'title: "{subtopic}"\n')
                file.write(f'description: "This is a description"\n')
                file.write(f"---\n\n")
                file.write(f"Content goes here...")


# Run the function
create_folders_and_files()
