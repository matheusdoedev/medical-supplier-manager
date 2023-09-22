import { createGlobalStyle } from 'styled-components'

export const Reset = createGlobalStyle`
	*, ul, ol, dl {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	a {
        text-decoration: none;
    }

	button {
		background: none;
		border: none
	}

	a:hover,
    button:hover {
        cursor: pointer;
        text-decoration: none;
    }

	a:disabled, button:disabled {
		cursor: not-allowed;
	}

	img {
        display: block;
        width: 100%;
    }

	body {

        min-height: 100vh;
    }

	ul {
        list-style: none;
    }

	fieldset {
        border: none;
    }
`
