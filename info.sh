cd builds
current=$(ls -1 | tail -n 1)
echo "VERSION $(cut -f 2 -d '_' <<< $current | rev | tail -c 4 | rev)"
echo "STATUS "
echo "MD5 $(md5sum $current)"
echo "SHA1 $(sha1sum $current)"
echo "SHA256 $(sha256sum $current)"
echo "SHA512 $(sha512sum $current)"