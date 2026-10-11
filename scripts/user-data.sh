#!/bin/bash
# EC2 user data for the Launch Template (Amazon Linux 2023)
# Installs Apache, mounts EFS as the web root, and starts the web server.
# Replace EFS_ID with your own file system ID before using.

EFS_ID="fs-xxxxxxxx"
WEB_ROOT="/var/www/html"

# Install Apache and EFS mount helper
dnf update -y
dnf install -y httpd amazon-efs-utils

# Mount EFS as the web root
mkdir -p $WEB_ROOT
mount -t efs -o tls $EFS_ID:/ $WEB_ROOT

# Remount automatically after reboot
echo "$EFS_ID:/ $WEB_ROOT efs _netdev,tls 0 0" >> /etc/fstab

# Start Apache
systemctl enable httpd
systemctl start httpd
