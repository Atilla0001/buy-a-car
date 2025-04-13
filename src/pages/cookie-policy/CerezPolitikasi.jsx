import React from 'react'
import './CerezPolitikasi.css'

const CerezPolitikasi = () => {
  return (
    <div className="policy-container">
      <div className="policy-content">
        <div className="policy-header">
          <h1>Politique des Cookies</h1>
          <p className="last-updated">Dernière mise à jour : 1 Mars 2024</p>
        </div>

        <div className="policy-summary">
          <p>Cette politique de cookies explique comment Buy A Car utilise les cookies et technologies similaires pour vous reconnaître lorsque vous visitez notre site web. Elle explique ce que sont ces technologies et pourquoi nous les utilisons, ainsi que vos droits pour contrôler leur utilisation.</p>
        </div>

        <div className="policy-navigation">
          <h3>Table des Matières</h3>
          <ul>
            <li><a href="#introduction">1. Introduction</a></li>
            <li><a href="#what-are-cookies">2. Que sont les Cookies ?</a></li>
            <li><a href="#types-of-cookies">3. Types de Cookies</a></li>
            <li><a href="#how-we-use">4. Comment Nous Utilisons les Cookies</a></li>
            <li><a href="#third-party">5. Cookies Tiers</a></li>
            <li><a href="#duration">6. Durée de Conservation</a></li>
            <li><a href="#control">7. Contrôle des Cookies</a></li>
            <li><a href="#specific-cookies">8. Cookies Spécifiques</a></li>
            <li><a href="#updates">9. Mises à Jour</a></li>
            <li><a href="#contact">10. Nous Contacter</a></li>
          </ul>
        </div>

        <div className="policy-section" id="introduction">
          <h2>1. Introduction</h2>
          <p>Chez Buy A Car, nous nous engageons à protéger votre vie privée et à vous offrir une expérience utilisateur transparente. Cette politique de cookies fait partie de notre engagement envers la transparence et la conformité avec le RGPD (Règlement Général sur la Protection des Données).</p>
        </div>

        <div className="policy-section" id="what-are-cookies">
          <h2>2. Que sont les Cookies ?</h2>
          <p>Les cookies sont de petits fichiers texte qui sont placés sur votre appareil lorsque vous visitez notre site web. Ils nous aident à :</p>
          <div className="info-box">
            <ul>
              <li>Mémoriser vos préférences</li>
              <li>Comprendre comment vous utilisez notre site</li>
              <li>Améliorer votre expérience de navigation</li>
              <li>Personnaliser le contenu que nous vous présentons</li>
            </ul>
          </div>
        </div>

        <div className="policy-section" id="types-of-cookies">
          <h2>3. Types de Cookies</h2>
          <h3>3.1 Cookies Essentiels</h3>
          <p>Ces cookies sont nécessaires au fonctionnement du site. Ils permettent les fonctionnalités de base comme la navigation et l'accès aux zones sécurisées.</p>
          <div className="cookie-examples">
            <h4>Exemples :</h4>
            <ul>
              <li>Session de connexion</li>
              <li>Préférences de sécurité</li>
              <li>Fonctionnalités de base du site</li>
            </ul>
          </div>

          <h3>3.2 Cookies de Performance</h3>
          <p>Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site en collectant des informations anonymes.</p>
          <div className="cookie-examples">
            <h4>Exemples :</h4>
            <ul>
              <li>Pages visitées</li>
              <li>Temps de chargement</li>
              <li>Erreurs rencontrées</li>
            </ul>
          </div>

          <h3>3.3 Cookies de Fonctionnalité</h3>
          <p>Ces cookies permettent au site de se souvenir de vos choix et de vous offrir des fonctionnalités améliorées.</p>
          <div className="cookie-examples">
            <h4>Exemples :</h4>
            <ul>
              <li>Préférences de langue</li>
              <li>Paramètres de recherche</li>
              <li>Personnalisation de l'interface</li>
            </ul>
          </div>

          <h3>3.4 Cookies de Ciblage</h3>
          <p>Ces cookies sont utilisés pour vous montrer des publicités pertinentes et suivre l'efficacité de nos campagnes publicitaires.</p>
          <div className="cookie-examples">
            <h4>Exemples :</h4>
            <ul>
              <li>Publicités personnalisées</li>
              <li>Suivi des conversions</li>
              <li>Analyse comportementale</li>
            </ul>
          </div>
        </div>

        <div className="policy-section" id="how-we-use">
          <h2>4. Comment Nous Utilisons les Cookies</h2>
          <p>Nous utilisons les cookies pour :</p>
          <ul>
            <li>Assurer le bon fonctionnement du site</li>
            <li>Améliorer votre expérience utilisateur</li>
            <li>Analyser l'utilisation du site</li>
            <li>Personnaliser le contenu et les publicités</li>
            <li>Assurer la sécurité</li>
          </ul>
        </div>

        <div className="policy-section" id="third-party">
          <h2>5. Cookies Tiers</h2>
          <p>Nous utilisons des services tiers qui peuvent également placer des cookies sur votre appareil :</p>
          <div className="third-party-providers">
            <div className="provider">
              <h4>Google Analytics</h4>
              <p>Pour l'analyse du trafic et le comportement des utilisateurs</p>
              <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">Politique de cookies de Google</a>
            </div>
            <div className="provider">
              <h4>Facebook Pixel</h4>
              <p>Pour la mesure et l'optimisation des publicités</p>
              <a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer">Politique de cookies de Facebook</a>
            </div>
          </div>
        </div>

        <div className="policy-section" id="duration">
          <h2>6. Durée de Conservation</h2>
          <div className="retention-details">
            <ul>
              <li>Cookies de session : Supprimés à la fermeture du navigateur</li>
              <li>Cookies persistants : Conservés jusqu'à 2 ans maximum</li>
              <li>Cookies analytiques : Conservés jusqu'à 26 mois</li>
              <li>Cookies publicitaires : Conservés jusqu'à 90 jours</li>
            </ul>
          </div>
        </div>

        <div className="policy-section" id="control">
          <h2>7. Contrôle des Cookies</h2>
          <p>Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Vous pouvez :</p>
          <ul>
            <li>Supprimer tous les cookies de votre navigateur</li>
            <li>Configurer votre navigateur pour bloquer les cookies</li>
            <li>Accepter ou refuser les cookies au cas par cas</li>
          </ul>

          <div className="browser-instructions">
            <h3>Comment Gérer les Cookies dans Votre Navigateur</h3>
            <div className="browser-instruction">
              <h4>Google Chrome</h4>
              <p>Menu {"->"} Paramètres {"->"} Confidentialité et sécurité {"->"} Cookies et autres données des sites</p>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">En savoir plus</a>
            </div>
            <div className="browser-instruction">
              <h4>Mozilla Firefox</h4>
              <p>Menu {"->"} Options {"->"} Vie privée & Sécurité {"->"} Cookies et données des sites</p>
              <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer">En savoir plus</a>
            </div>
            <div className="browser-instruction">
              <h4>Safari</h4>
              <p>Préférences {"->"} Confidentialité {"->"} Gestion des cookies</p>
              <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">En savoir plus</a>
            </div>
          </div>

          <div className="cookie-preferences">
            <h3>Gérer Vos Préférences de Cookies</h3>
            <p>Utilisez notre outil de gestion des cookies pour personnaliser vos préférences :</p>
            <button className="cookie-preferences-button">Gérer les Cookies</button>
          </div>
        </div>

        <div className="policy-section" id="specific-cookies">
          <h2>8. Cookies Spécifiques</h2>
          <h3>8.1 Cookies de Session</h3>
          <p>Ces cookies sont temporaires et sont supprimés lorsque vous fermez votre navigateur.</p>

          <h3>8.2 Cookies Persistants</h3>
          <p>Ces cookies restent sur votre appareil pendant une période définie ou jusqu'à ce que vous les supprimiez manuellement.</p>

          <h3>8.3 Cookies de Géolocalisation</h3>
          <p>Utilisés pour vous montrer du contenu pertinent à votre localisation.</p>
        </div>

        <div className="policy-section" id="updates">
          <h2>9. Mises à Jour</h2>
          <p>Nous pouvons mettre à jour cette politique de cookies périodiquement. La date de dernière mise à jour sera toujours indiquée en haut de la page.</p>
        </div>

        <div className="policy-section" id="contact">
          <h2>10. Nous Contacter</h2>
          <p>Pour toute question concernant notre politique de cookies, contactez-nous :</p>
          <div className="contact-details">
            <p>Email : privacy@buyacar.fr</p>
            <p>Téléphone : +33 1 23 45 67 89</p>
            <p>Adresse : 123 Avenue des Champs-Élysées, 75008 Paris, France</p>
            <p>Délégué à la protection des données : Jean Dupont</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CerezPolitikasi 
