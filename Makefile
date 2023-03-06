copy-swagger:
	cp -r ../faros/swagger.json ./swagger.json

generate:
	docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i /local/swagger.json \
    -g typescript \
    -o /local/src/api
