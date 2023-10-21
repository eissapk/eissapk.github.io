#!/bin/sh

# clean root
rm ../*.*
rm ../CNAME
rm -r ../assets

# copy dist content to root
cp -r dist/assets/ ..
cp dist/*.* ..
cp dist/CNAME ..
