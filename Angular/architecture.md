

# Principe général: 

An Angular app is made of COMPONENTS. COMPONENTS define the VIEWS (elements on screen). COMPONENTS are made of MODULES (NgModules) which themselves are made of functional sets. 

COMPONENTS use SERVICES which provides functionalité not directly related to views. Service providers are INEJECTED in COMPONENENTS as DEPENDECIES


COMPONENTS, MODULES, and SERVICES are classes. They all use DECORATORS which mark their type and provide metadata that tells angular how to use them. 


The view is first defined in the TEMPLATE. The template combine HTML with angular DIRECTIVES (e.g. (click)) and binding (e.g. [mavariable])

# organisation physique

avoir un dossier "shared" avec son module

avoir un dossier pour chaque "feature", avec son module et son composant container à la racine

# éviter d'avoir des modules avec des répétitions

on peut utiliser le module.shared pour importer les modules communs à plusieurs modules. Il faut importer et exporter. 
