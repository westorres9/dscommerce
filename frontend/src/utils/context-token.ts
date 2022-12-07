import {AccessTokenPayload} from "../types/auth";
import {createContext} from "react";

export type ContextTokenType = {
    contextTokenPayload: AccessTokenPayload | undefined;
    setContextTokenPayload: (accessTokenPayload: AccessTokenPayload | undefined) => void;
}

export const ContextToken = createContext<ContextTokenType>({
    contextTokenPayload: undefined,
    setContextTokenPayload: () => {},
})