# 🚀 Angular + Nginx + Docker en AWS

Este proyecto muestra cómo desplegar una aplicación **Angular en Nginx** dentro de un **contenedor Docker**, con soporte para múltiples aplicaciones en diferentes puertos.

## 🌟 Tecnologías Utilizadas
- **Angular** (Frontend)
- **Nginx** (Servidor web)
- **Docker** (Contenedores)
- **AWS EC2** (Infraestructura en la nube)

## 📌 Cómo Usarlo

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio

2. **Construir la imagen Docker**
   ```bash
   docker build -t angular-nginx .
   
3. **Ejecutar el contenedor**
    ```bash
   docker run -d -p 8080:8080 dandrade92/angular-nginx:latest
    
4. **Acceder en el navegador**

  http://localhost:8080/ (App1)

📦 Docker Hub

La imagen está disponible en Docker Hub.
📷 Demo
![imagen](https://github.com/user-attachments/assets/8bc67287-7d45-4df5-bd21-16640d49181b)

👨‍💻 Autor

📌 Daniel Andrade - Desarrollador Cloud & DevOps
