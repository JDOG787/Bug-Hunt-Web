import { gql } from '@apollo/client';

export const LOGIN = gql`
    query login($code: String!) {
        login(code: $code)
    }
`;