import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 url: "https://test.sso.dashvault.com/auth",
 realm: "sureshtest",
 clientId: "azureclient",
});

export default keycloak;