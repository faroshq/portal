copy-swagger:
	cp ../faros/swagger.json ./swagger.json

.PHONY: generate
generate: generate-faros generate-k8s generate-fix-perm

.PHONY: generate-faros
generate-faros:
	@docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i /local/swagger.json \
    -g typescript \
    -o /local/src/api/faros


.PHONY: generate-k8s
generate-k8s:
	@docker run --rm -v "${PWD}:/local" quay.io/mangirdas/openapi-generator generate \
    -i /local/k8s-swagger.json \
    -g typescript \
	--skip-validate-spec \
    -o /local/src/api/k8s

generate-fix-perm:
	sudo chown -R $(shell id -u):$(shell id -g) ./src/api/
	chmod -R 755 ./src/api/faros
