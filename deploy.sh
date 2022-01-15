export AWS_PROFILE=velaris-non-prod
sudo $(aws ecr get-login --no-include-email --region eu-west-2)
sudo docker build -t eks-test .
sudo docker tag eks-test:latest 201541158170.dkr.ecr.eu-west-2.amazonaws.com/eks-test:latest
sudo docker push 201541158170.dkr.ecr.eu-west-2.amazonaws.com/eks-test:latest


# kubectl apply -f coinbase-service.yaml