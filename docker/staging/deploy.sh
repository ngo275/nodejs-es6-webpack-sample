#!/usr/bin/env bash

set -e
set -v

# Extract Service Account from GOOGLE_AUTH ENV
echo ${GOOGLE_AUTH_STG} | base64 -i --decode > ${HOME}/gcp-key.json

gcloud auth activate-service-account --key-file ${HOME}/gcp-key.json
gcloud --quiet config set project ${GOOGLE_PROJECT_ID_STG}
gcloud --quiet config set compute/zone ${GOOGLE_COMPUTE_ZONE_STG}
gcloud --quiet container clusters get-credentials ${GOOGLE_CLUSTER_NAME_STG}

# イメージにタグを付ける
docker tag gateway "asia.gcr.io/${GOOGLE_PROJECT_ID_STG}/gateway:${CIRCLE_SHA1}"
docker tag gateway "asia.gcr.io/${GOOGLE_PROJECT_ID_STG}/gateway:${CIRCLE_BRANCH}"
docker tag gateway-nginx "asia.gcr.io/${GOOGLE_PROJECT_ID_STG}/gateway-nginx:${CIRCLE_SHA1}"
docker tag gateway-nginx "asia.gcr.io/${GOOGLE_PROJECT_ID_STG}/gateway-nginx:${CIRCLE_BRANCH}"

# イメージのアップロード
gcloud docker -- push "asia.gcr.io/${GOOGLE_PROJECT_ID_STG}/gateway:${CIRCLE_SHA1}"
gcloud docker -- push "asia.gcr.io/${GOOGLE_PROJECT_ID_STG}/gateway:${CIRCLE_BRANCH}"
gcloud docker -- push "asia.gcr.io/${GOOGLE_PROJECT_ID_STG}/gateway-nginx:${CIRCLE_SHA1}"
gcloud docker -- push "asia.gcr.io/${GOOGLE_PROJECT_ID_STG}/gateway-nginx:${CIRCLE_BRANCH}"

# 切替
kubectl set image deployment/gateway \
  gateway="asia.gcr.io/${GOOGLE_PROJECT_ID_STG}/gateway:${CIRCLE_SHA1}"

#kubectl set image deployment/gateway-frontend \
#  gateway="asia.gcr.io/${GOOGLE_PROJECT_ID_STG}/gateway:${CIRCLE_SHA1}" \
#  gateway-nginx="asia.gcr.io/${GOOGLE_PROJECT_ID_STG}/gateway-nginx:${CIRCLE_SHA1}"