# CHANGELOG

## [1.0.1]

### Ajouts

- Dockerisation complète du frontend, backend et MongoDB
- Mise en place de Docker Compose
- Ajout du monitoring avec endpoint /health
- Ajout du système de logs Winston
- Déploiement du backend sur Render.
- Déploiement du frontend sur Render.
- Ajout du monitoring avec Uptime Kuma.
- Ajout du pipeline GitHub Actions CI/CD.
- Connexion à MongoDB Atlas.


### Sécurité

- Vérification des routes protégées avec JWT
- Protection des routes administrateur avec isAdmin
- Sécurisation de la configuration CORS
- Vérification du JWT_SECRET
- Analyse des dépendances avec npm audit
- Suppression des secrets du dépôt GitHub.
- Ajout d’une politique de mot de passe : minimum 12 caractères, une majuscule et un caractère spécial.
- Identification du risque localStorage pour JWT.


### Corrections
- Correction de la connexion MongoDB Atlas.
- Correction des URLs API frontend en production.
- Correction CORS entre frontend et backend.
- Correction des routes admin.
- Correction de l’accès à la page admin.
- Correction du lien de navigation `shipping_payment`.
- Correction de l’affichage des produits admin.
- Correction des méthodes par défaut : Colissimo et Carte bancaire.
- Suppression des `alert()` au profit de messages utilisateur.
- Suppression des `console.log` sensibles.
- Correction des erreurs GitHub Actions.
- Correction du build React sur Render.
- SetError non utilisé dans frontend/pages/Register.js
- Suppression du .gitignore du dossier frontend
- Vérification des formulaires utilisateurs

### Documentation

- Mise à jour de la documentation technique
- Ajout de commentaires dans le backend et frontend
- Documentation des corrections, failles et améliorations.
