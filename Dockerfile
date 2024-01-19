# Usa la imagen oficial de Node.js como base
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /

# Copia los archivos de frontend al contenedor
COPY . .

# Establece el directorio de trabajo dentro del backend
WORKDIR /backend

# Copia los archivos de la aplicación al contenedor
COPY backend/package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación al contenedor
COPY backend .

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3080


# Cambia al directorio de frontend
WORKDIR /frontend

# Copia los archivos de la aplicación al contenedor
COPY frontend/package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación al contenedor
COPY frontend .


# Comando para iniciar el servidor Node.js
WORKDIR /backend
CMD ["npm", "run", "prod"]