# Veiledning i active directory

## Viktige begreper å vite
- GPO, GPO eller group policy, er et sett med rettigheter som kan designeres til OU eller spesifike brukere.
- OU, OU eller orginasational units er laveste nivås gruppering, som vil at det er ingenting som grupperer OU, det er her du vil designere Group policies 

## Hvordan sette opp bruker
For å sette opp en bruker i acitve directory må du først navigere til ``Active Directory Users and Computers console``

[brukere og maskiner konsoll](./dependencies/ad-users-computers.png)

Når du har gått inne på denne menyen vil et nytt vindu poppe opp, der du kan høyre klikke på mappen du vil legge brukeren til i, så velger du ``new`` også ``user``

[legg til bruker](./dependencies/ad-add-user.png)

Du vil nå få opp en popup vindu der du kan administrere: 
- Fornavn: (optional)
- Navn forkortning: (optional)
- Etternavn (optional)
- Fullt navn (nødvendig)
- Brukernavn (nødvendig)

- Passord ved login
- Om bruker må skifte passord neste gang en logger inn
- Om bruker kan skifte passord
- Om passordet må oppdateres etterhvert
- Om brukeren er deaktivert

## Hvordan administrere mappe-tilgang og filnivå
For å kunne administrere tilgang til filer og mapper kan du enten skifte på brukere spesifikt eller en gruppe med brukere. For å administerere rettigheter til en OU (Organisational unit) må du lage en GPO (Group policy), en GPO beskriver rettigheter som skal gjelde for hvem enn du setter de på. 

For å opprette en GPO, søk opp Group policy Management i ``Windows søkemonitoren``

[image](./dependencies/ad-group-policy.png)

Eller velg det i ``Server management``

[image](./dependencies/ad-servermanagement-group-policy-button.png)

Du kan så opprette en group policy ved å høyre klikke en mappe ``Create a GPO in this domain, and Link it here``

[image](./dependencies/ad-create-gpo.png)

Du kan nå høyre klikke igjen og trykke ``Edit``. Du har nå laget en GPO knyttet til et domene, alle brukere under domenet og OU vil holde til disse reglene