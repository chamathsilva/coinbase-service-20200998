# List all Resources
kubectl get all -n coinbase-service

kubectl get deployments -n coinbase-service

# check the role out status
kubectl rollout status deployment/deployment-coinbase -n coinbase-service


# get service
kubectl get svc service-coinbase -n coinbase-service -o json
kubectl get svc service-coinbase -n coinbase-service -o json | jq -r '.spec.selector."app.kubernetes.io/name"'
# app-coinbase
# get deployment 
kubectl get deployment deployment-coinbase -n coinbase-service -o json
# kubectl get deployment app-coinbase -n coinbase-service -o json

# kubectl get deployment deployment-coinbase -n coinbase-service -o json | jq -r .spec.template.spec.containers[0].name

# update deployement
kubectl set image deployment/deployment-coinbase app-coinbase=362392363900.dkr.ecr.eu-west-2.amazonaws.com/eks-test:2f340f3 -n coinbase-service --record



# export TMP=k8s/tmpDeploy.yaml;envsubst < k8s/coinbase-service.yaml > ${TMP}; kubectl apply -f ${TMP}

# Create the service if it does not exist
export IS_SERVICE_AVAILABLE=$(kubectl get svc -n qa-coinbase-namespace | grep dev-coinbase-service | wc -l)
if [ ${IS_SERVICE_AVAILABLE} -eq 0 ]; then envsubst < k8s/coinbase-service.yaml > ${TMP}; kubectl apply -f ${TMP}; fi;
if []

# get the service details
export SERVICE=$(kubectl get svc dev-coinbase-service -n dev-coinbase-namespace -o json | jq -r '.spec.selector."app.kubernetes.io/name"')
# Create the service if it does not exist
if [ ! $SERVICE ]; then envsubst < k8s/coinbase-service.yaml > ${TMP}; kubectl apply -f ${TMP}; fi;
# Update the service if it exist
if [ $SERVICE ]; then export TARGET_CONTAINER=$(kubectl get deployment dev-coinbase-deployment -n dev-coinbase-namespace -o json | jq -r .spec.template.spec.containers[0].name); kubectl set image deployment/dev-coinbase-deployment ${TARGET_CONTAINER}=362392363900.dkr.ecr.eu-west-2.amazonaws.com/eks-test:2f340f3 -n dev-coinbase-namespace --record; fi;
# check the deployment rollout status
kubectl rollout status deployment/dev-coinbase-deployment -n dev-coinbase-namespace

# export TARGET_CONTAINER=$(kubectl get deployment dev-coinbase-deployment -n dev-coinbase-namespace -o json | jq -r .spec.template.spec.containers[0].name);
# kubectl set image deployment/dev-coinbase-deployment ${TARGET_CONTAINER}=362392363900.dkr.ecr.eu-west-2.amazonaws.com/eks-test:2f340f3 -n dev-coinbase-namespace --record


export GREEN_SERVICE=$(kubectl get svc green-coinbase-service -o json -n green-coinbase-namespace | jq -r .spec.selector.app)