cd lambda
zip -r ../gr-api-proxy.zip *
cd ..
aws lambda update-function-code --function-name gr-api-proxy --zip-file fileb://gr-api-proxy.zip
