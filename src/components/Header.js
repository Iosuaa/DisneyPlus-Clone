import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>Series</span>
                </a>
            </NavMenu>
            <UserImg src="https://lh3.googleusercontent.com/-jR0TYkf_8Bo/Xt0TvK9u9wI/AAAAAAAANNA/_fuRJKV9Q_AKorhtnXOLQPM-91ulpr_kwCEwYBhgLKtQDAL1OcqysFX9_rkuPQx6VjNWZYk0FxmP1kWgcCgzjopAPNFESKRp5OcstCbOp-sPBappENJNeQI8CaR2M9vFhQpoVzCkewlLzYjgJr1Jonsypy4dRFHbbXjacWPRDeDHVsardNkKtS48NIqruoA0fK31qzhJ2lXKHGQ3Aia3iJk0rs9CcDQURcxehfaU8LDwHnozHDOAIOKuZry-aM_5pGSrGwMuBm47_hbUZfroDITdDl4VoenO677xXkHp1E3ewLDYyfyzmS7h9mhV1S44VS-KYfGb5vx209FqvtCxBx7PGdMgehwrXEC68xRs-0nlp0v_wGUIpCGb_ZRjdIacKIr81y8unzLFaW09JM-0172wp1nrAgq0DN1bGyxBNs5hGmMxyFpSPU-hsXTxom9_JmSxV6fliD_Z0QmQhENSiy_XrxiSBab53ZXJM5w3ITTa2RuUXsMxCKzXlpyh-jZkCOFsFFrPZPNmxQsnhNQdNy4lU6F2uo3ES53l83aMTL_eP4kGTXvshM1p9O2F1ygwnhdSnYst0iDmccLhLj1N_dDFLA8XvI0PjQG4FWplvNbH2Rdxy--zd-xYHxL5f1avGXM4yK5i0ZIg2ZO4X7EYJMn37W0U_MOCTj4UG/w140-h140-p/CLS_0122859.JPG"/>

        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    allign-items: center;
    padding: 0 36px;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 20px;
    allign-items: center;


    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        
        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    padding-top: 8px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;

`