# Opsett av Nettverk

## Forrutsetninger
Vi må lage en skisse for et nettverk som enda ikke eksisterer. Det er behov for subnet brannmur og portstyring. Vi ser for oss 3 selskaper som alle har leid kontor av oss. Vi deler de inn i tre forskjellige vlan med hver sin switch slik at de kan koble seg til den med aksesspunkter, printer eller hva enn de skulle trenge.

Jeg har brukt cisco packet tracer for å visualisere vlan brannmur og generell nettverksoppsett

[image](../dependencies/drift-vlan.png)

## Forklaring
Jeg deler nettverket opp i tre subnett. Med en hovedruter, en felles brannmur også en switch som deler opp i vlan. Jeg har så en switch for hver av kontorene som de kan koble seg til med kabel og sette opp aksesspunkt hvis nødvendig. 

## VLAN-oversikt
 
VLAN gjør det ikke mulig for noen på det ene vlan til å koble til det andre, det gjør at hvert nettverk er helt isolert og kan bare koble lokalt til sine egene enheter.

Slik vil nettverksoppsesse se ut i tabell

| VLAN ID | Navn       | Subnett            | Gateway          | DHCP-range                      | Tilkoblede enheter         |
|---------|------------|--------------------|------------------|---------------------------------|----------------------------|
| 10      | BEDRIFT_A  | 192.168.10.0/24    | 192.168.10.1     | 192.168.10.11 – 192.168.10.254  | Switch0, PC0, Printer0     |
| 20      | BEDRIFT_B  | 192.168.20.0/24    | 192.168.20.1     | 192.168.20.11 – 192.168.20.254  | Switch1, PC1, Printer1     |
| 30      | BEDRIFT_C  | 192.168.30.0/24    | 192.168.30.1     | 192.168.30.11 – 192.168.30.254  | Switch2, PC2, Printer2     |
 
---

| Enhet   | Port         | Modus  | VLAN       | Koblet til          |
|---------|--------------|--------|------------|---------------------|
| Switch3 | Gig0/1       | Trunk  | 10, 20, 30 | Router0 (Gig0/0)    |
| Switch3 | Gig0/2       | Trunk  | 10         | Switch0             |
| Switch3 | Gig0/3       | Trunk  | 20         | Switch1             |
| Switch3 | Gig0/4       | Trunk  | 30         | Switch2             |
| Switch0 | Fa0/1–Fa0/10 | Access | 10         | PC0, Printer0, m.fl.|
| Switch1 | Fa0/1–Fa0/10 | Access | 20         | PC1, Printer1, m.fl.|
| Switch2 | Fa0/1–Fa0/10 | Access | 30         | PC2, Printer2, m.fl.|

---

| Fra        | Til        | Tillatt? |
|------------|------------|----------|
| BEDRIFT_A  | BEDRIFT_B  | ❌ Blokkert |
| BEDRIFT_A  | BEDRIFT_C  | ❌ Blokkert |
| BEDRIFT_B  | BEDRIFT_A  | ❌ Blokkert |
| BEDRIFT_B  | BEDRIFT_C  | ❌ Blokkert |
| BEDRIFT_C  | BEDRIFT_A  | ❌ Blokkert |
| BEDRIFT_C  | BEDRIFT_B  | ❌ Blokkert |
| Alle VLAN  | Internett  | ✅ Tillatt  |
| Internt    | Samme VLAN | ✅ Tillatt  |


---