export interface DatosRespuestaAuth {
    kind: string;
    localId: string;
    email: string;
    displayName: string;
    idToken: string;
    registrered: boolean;
    refreshToken: string;
    expiredIn: string;
}