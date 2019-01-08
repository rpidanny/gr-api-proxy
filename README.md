# gr-api-proxy

GoodReads API Proxy implemented as an AWS Lambda function.

## Reason for API proxy

- Hide API key
- Convert XML response from goodreads to JSON

## Requirements

- [AWS Lambda](https://aws.amazon.com/lambda)
- [Goodreads API key](https://www.goodreads.com/api/keys)


## Installation

- clone repository
- run `cd lambda`
- run `npm i`

## Deployment

- Create a lambda function on AWS
- Update `deploy.sh` with you function name
- Add `GR_KEY` environment variable on your lambda function
- Run `./deploy.sh`
- Create an `API Gatrway` to trigger the lambda function

## Usage

Once your lambda function is setup with API gateway, you can call all the APIs of [Goodreads](https://www.goodreads.com/api/index) by just replacing `www.goodreads.com` with your API gateway URL. You don't need to send the `key` query parameter.
