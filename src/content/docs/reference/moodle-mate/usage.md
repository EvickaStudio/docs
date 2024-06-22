---
title: Usage
description: Usage for Moodle Mate
---

## Usage

Using Moodle Mate effectively involves understanding its core functionalities and how to interact with the system once it's up and running. This guide will walk you through the basic operations to get the most out of Moodle Mate.

### Starting the Application

After installation and configuration, you can start the application by running the main script:

```bash
python3 main.py
```

This command initiates the Moodle Mate service, which will begin fetching and summarizing Moodle notifications based on the intervals and settings specified in your `config.ini` file.

### Interacting with Notifications

Notifications are sent to the configured channels such as Discord or Pushbullet. Ensure your API keys and webhook URLs are correctly set up to receive these notifications.

### Updating the Configuration

If you need to change any settings, such as updating API keys or modifying the notification interval, edit the `config.ini` file and restart the application for changes to take effect.

### Stopping the Application

To stop Moodle Mate, you can simply terminate the process in your terminal using `Ctrl+C` or an equivalent command in your operating system.

### Regular Maintenance

Regularly check for updates on the GitHub repository to ensure you are running the most stable and feature-rich version of Moodle Mate. Update your system and dependencies as needed.
