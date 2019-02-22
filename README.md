```bash
minikube start
eval $(minikube docker-env)
docker-compose build
kubectl run node-server --image=node-server --image-pull-policy=Never --port=8080
kubectl get pods
kubectl get deployments
kubectl logs -f deployments/node-server
kubectl expose deployment node-server --type=LoadBalancer --port=8080
kubectl get services
curl $(minikube service node-server --url)
kubectl delete service node-server
kubectl delete deployment node-server
kubectl delete pod node-server
minikube stop
```
