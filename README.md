Demo
====

```bash
minikube start
eval $(minikube docker-env)
docker-compose build
kubectl run node-server --image=node-server --image-pull-policy=Never --port=8080 --expose --generator=deployment/apps.v1 --dry-run --output yaml
kubectl run node-server --image=node-server --image-pull-policy=Never --port=8080 --expose --generator=deployment/apps.v1
kubectl get deployments
kubectl get services
kubectl run -i --tty --rm debug --image=alpine --restart=Never -- wget -qO - node-server:8080
kubectl logs -f deployments/node-server
kubectl delete service node-server
kubectl expose deployment node-server --type=NodePort --port=8080
kubectl get services
curl $(minikube service node-server --url)
kubectl delete service,deployment node-server
minikube stop
```


Contexts
========

```bash
kubectl config get-contexts
kubectl config current-context
kubectl config use-context my-cluster-name
```


Heapster
========

```bash
minikube addons list
minikube addons enable heapster
minikube addons open heapster
kubectl top node
kubectl top pod
```

Debug
=====

```bash
kubectl run -i --tty --rm debug --image=alpine --restart=Never -- wget -qO - node-server:8080
```

Ingress
=======

```bash
minikube addons list
minikube addons enable ingress
kubectl get pods -n kube-system
kubectl run web --image=gcr.io/google-samples/hello-app:1.0 --port=8080 --generator=deployment/apps.v1
kubectl expose deployment web --target-port=8080 --type=NodePort
kubectl apply -f example-ingress.yaml
kubectl get ing
kubectl describe ing example-ingress
```

Rollout new image
=================

```bash
docker-compose build
kubectl set image deployment node-server node-server=node-server:latest
kubectl rollout status deployment node-server 
kubectl rollout undo deployment node-server 
```