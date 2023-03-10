copy-swagger:
	cp ../faros/swagger.json ./swagger.json
	cp ../faros/kcp-swagger.json ./kcp-swagger.json

.PHONY: generate
generate: generate-faros generate-kcp generate-fix-perm

.PHONY: generate-faros
generate-faros:
	@docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i /local/swagger.json \
    -g typescript \
    -o /local/src/api/faros


.PHONY: generate-kcp
generate-kcp:
	@docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i /local/kcp-swagger.json \
    -g typescript \
    -o /local/src/api/kcp

generate-fix-perm:
	sudo chown -R $(shell id -u):$(shell id -g) ./src/api/
	chmod -R 755 ./src/api/faros
	chmod -R 755 ./src/api/kcp
