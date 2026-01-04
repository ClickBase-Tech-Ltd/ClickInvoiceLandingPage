#!/bin/bash

# ================================
# SAFE Hibernate Setup for Surface
# ================================

echo "Step 1: Removing broken PolicyKit rules..."
sudo rm -f /etc/polkit-1/localauthority/50-local.d/hibernate.pkla
sudo rm -f /etc/polkit-1/localauthority/10-vendor.d/com.ubuntu.desktop.pkla

echo "Step 2: Configuring logind for lid and power button hibernate..."
sudo mkdir -p /etc/systemd/
sudo sed -i 's/^HandleLidSwitch=.*/HandleLidSwitch=hibernate/' /etc/systemd/logind.conf || echo "HandleLidSwitch=hibernate" | sudo tee -a /etc/systemd/logind.conf
sudo sed -i 's/^HandleLidSwitchDocked=.*/HandleLidSwitchDocked=ignore/' /etc/systemd/logind.conf || echo "HandleLidSwitchDocked=ignore" | sudo tee -a /etc/systemd/logind.conf
sudo sed -i 's/^HandlePowerKey=.*/HandlePowerKey=hibernate/' /etc/systemd/logind.conf || echo "HandlePowerKey=hibernate" | sudo tee -a /etc/systemd/logind.conf

echo "Restarting systemd-logind..."
sudo systemctl restart systemd-logind

echo "Step 3: Adding GUI Hibernate menu entry for user..."
mkdir -p ~/.local/share/applications
cat > ~/.local/share/applications/hibernate.desktop <<EOL
[Desktop Entry]
Name=Hibernate
Comment=Hibernate the system
Exec=systemctl hibernate
Icon=system-shutdown
Terminal=false
Type=Application
Categories=System;
EOL

echo "All done!"
echo "You can now test:"
echo "1. Pressing the power button should hibernate."
echo "2. Closing the lid should hibernate."
echo "3. Hibernate option is available in your Applications menu."
