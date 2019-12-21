import {css} from 'emotion'

export const main = css`
  
  & table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    max-width: 100%;
  }

  & thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }

  & th, td {
    text-align: left;
    padding: .5rem;
  }
`;