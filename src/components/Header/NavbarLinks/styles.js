import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    color: #000;
    text-decoration: none;

		@media (max-width: 960px) {
			color: #000;
		}
  }

  ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;

			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 2rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 70px 3rem 0 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 2rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;