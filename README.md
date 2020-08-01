# PWDMGR

Offline Firefox password manager.

Simple password manager that works offline.

![PWDMGR Add-on](img/eg.png)

## Installing

Download most recent [release](https://github.com/dosisod/PWDMGR/releases).

Verify the file was downloaded correctly by comparing against the [checksum](builds/checksum):

```
$ sha512sum file.xpi
```

The hash outputted by `sha512sum` should match the hash from the checksum

Goto `about:addons` click the gear -> "Install Add-on From File" -> select `.xpi` file.

Done!

## Fix "This add-on appears to be corrupt"

This error is caused by using an old version of Firefox that is known to remove add-ons.

Updating to the newest version of Firefox and reinstalling add-on will fix this.