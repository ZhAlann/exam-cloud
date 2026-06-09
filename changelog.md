# CHANGELOG

## [1.0.1]

### Ajouts

* Dockerisation complète du frontend, backend et MongoDB
* Mise en place de Docker Compose
* Ajout des microservices et du gateway
* Ajout du monitoring avec endpoint /health
* Ajout du système de logs Winston

### Sécurité

* Vérification des routes protégées avec JWT
* Protection des routes administrateur avec isAdmin
* Sécurisation de la configuration CORS
* Vérification du JWT_SECRET
* Analyse des dépendances avec npm audit

### Corrections
* SetError non utilisé dans frontend/pages/Register.js
* Suppression du .gitignore du dossier frontend
* Correction des warnings MongoDB dépréciés
* Vérification des formulaires utilisateurs
* Vérification des accès PUT/DELETE
* Correction des erreurs de connexion MongoDB

### Documentation

* Mise à jour de la documentation technique
* Ajout de commentaires dans le backend et frontend
