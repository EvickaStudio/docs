---
title: Installing
description: Installing Moodle Mate
---

## Installation

Installing Moodle Mate is straightforward. Follow these steps to get it set up on your system.

### Prerequisites

Before you begin, ensure you have Python 3.10 or higher installed on your system. This is necessary to run Moodle Mate without any compatibility issues.

### Step 1: Clone the Repository

Start by cloning the Moodle Mate repository from GitHub to your local machine:

```bash
git clone https://github.com/EvickaStudio/Moodle-Mate.git
cd Moodle-Mate
```

### Step 2: Set Up a Virtual Environment (Optional)

It's recommended to use a virtual environment to avoid conflicts with other Python projects you might be working on. Here's how you can set it up:

**On Windows:**

```powershell
py -m venv venv
venv\Scripts\activate
```

**On Linux / macOS:**

```bash
python3 -m venv venv
source venv/bin/activate
```

### Step 3: Install Dependencies

Install all the required dependencies using pip:

```bash
pip install -r requirements.txt
```
