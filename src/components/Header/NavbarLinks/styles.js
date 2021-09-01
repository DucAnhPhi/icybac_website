import styled from 'styled-components';

export const Wrapper = styled.ul`
	margin: 0;
	padding: 0;
	height: 70px;
  a {
    color: #000;
		text-decoration: none;

		@media (max-width: 1000px) {
			color: #000;
		}
  }

  ${({ desktop }) =>
    desktop
      ? `
			display: flex;

			@media (max-width: 1000px) {
					display: none;
			}

			.mainpoint {
				position: relative;
				display: flex;
				align-items: center;
				height: 68px;
				:hover {
					border-bottom: 2px solid #eb5e57;
					.link {
						height: 70px;
						display: flex;
						align-items: center;
						color: #eb5e57;
					}
					.submenu {
						display: block;
						opacity: 1;
					}
				}
			}

			.submenu {
				display: none;
				position: absolute;
				top: 70px;
				background-color: white;
				width: 200px;
				padding: 0;
				a {
					padding: 0 0 0 20px;
					height: 70px;
					display: flex;
					align-items: center;
					:hover {
						cursor: pointer;
						color: #eb5e57;
					}
				}
			}

			a {
					margin-right: 2rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 50px 0 0 0;
			display: flex;
			flex-direction: column;

			.mainpoint {
				display: flex;
				align-items: center;
				.link {
					height: 70px;
					flex: 1;
					padding-left: 40px;
					display: flex;
					align-items: center;
					:hover {
						color: #eb5e57;
					}
				}
			}

			.submenu {
				display: none
			}
	`}
`;