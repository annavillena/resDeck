import styled from 'styled-components'
import './App.css'

const NavBar = styled.div`
    position: absolute;
    top: 2.5vh;
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h1`
    margin-left: 20px;
    font-family: 'Montserrat';
    font-size: 64px;
    font-weight: 400;
    color: #0D1B4C;
`

const LoginButton = styled.button`
    width: 154px;
    height: 59px;
    color: #0D1B4C;
    font-family: 'Lato';
    font-size: 24px;
    background-color: white;
    border: none;
`

const SignUpButton = styled.button`
    width: 154px;
    height: 59px;
    color: #F3ECC8;
    font-family: 'Lato';
    font-size: 24px;
    background-color: #0D1B4C;
    border-radius: 15px;
`

const CoolRectangle = styled.div`
    margin-top: 200px;
    width: 75vw;
    height: 62.5vh;
    background-color: #F3ECC8;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const BigIntro = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 6vw;
    margin-bottom: 10px !important;

    p {
        color: #0D1B4C;
        font-family: 'Montserrat';
        font-weight: 500;
        line-height: 78px;
        font-size: 4rem;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }
`

const SmallIntro = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 6vw;

    p {
        color: #0D1B4C;
        font-family: 'Montserrat';
        font-weight: 400;
        line-height: 51px;
        font-size: 42px;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }
`

function App() {
    return (
        <div>
            <NavBar>
                <div className='left-side-navbar'>
                    <svg width="67" height="44" viewBox="0 0 67 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 19.7836V26.5058C18.581 11.9966 24.7487 58.2822 62.464 30.1283C63.8086 29.1281 64.9552 27.462 65.7617 25.3368C66.5679 23.2115 66.9986 20.7206 67 18.1728C25.8515 53.0848 19.4921 4.62884 0.880307 17.5237C0.620681 17.7037 0.398012 18.0153 0.241079 18.4182C0.0841443 18.821 0.000167178 19.2967 0 19.7836Z" fill="#78C2C3"/>
                        <path d="M66.8239 2.89055C54.4762 -6.75108 47.6103 10.4533 33.3248 14.8205C41.3687 17.2795 51.7669 15.6663 66.8239 2.89055Z" fill="#3F6699"/>
                        <path d="M0 14.7381C19.179 -0.240366 25.1336 49.5558 66.2036 15.4072C66.4417 15.2095 66.6429 14.8984 66.7839 14.5099C66.9248 14.1214 66.9998 13.6713 67 13.2116V6.40391C29.6982 38.0516 20.9853 1.19097 5.81721 3.62876C4.22738 3.88348 2.74947 5.16395 1.67331 7.21914C0.59716 9.27429 0.000385901 11.9559 0 14.7381Z" fill="#78C2C3"/>
                        <path d="M0.17627 30.2578C12.5215 20.6162 19.3885 37.8206 33.6737 42.1885C25.628 44.6463 15.2319 43.0335 0.17627 30.2578Z" fill="#0D1B4C"/>
                    </svg>
                    <Title>resDeck</Title>
                </div>

                <div className='right-side-navbar'>
                    <LoginButton>LOGIN</LoginButton>
                    <SignUpButton>SIGN UP</SignUpButton>
                </div>
            </NavBar>
    
            <CoolRectangle>
                <BigIntro>
                    <p>A community for</p>
                    <p>free <strong>resume reviews</strong></p>
                </BigIntro>
                <SmallIntro>
                    <p>Receive resume feedback.</p>
                    <p>Give resume feedback.</p>
                    <p>Connect with others.</p>
                    <p><strong>Get the dream job.</strong></p>
                </SmallIntro> 
            </CoolRectangle>

            <svg className='resume-illustration' width="525" height="589" viewBox="0 0 525 589" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="78" width="447" height="530" rx="30" fill="#78C2C3"/>
                <rect x="41" y="26" width="447" height="530" rx="30" fill="#3F6699"/>
                <rect y="59" width="447" height="530" rx="30" fill="#FAFAFA"/>
                <path d="M134.186 116.09C134.186 117.53 134.006 118.82 133.646 119.96C133.298 121.1 132.776 122.066 132.08 122.858C131.396 123.638 130.55 124.238 129.542 124.658C128.534 125.078 127.376 125.288 126.068 125.288C124.88 125.288 123.668 125.12 122.432 124.784C122.456 124.436 122.486 124.094 122.522 123.758C122.558 123.41 122.588 123.068 122.612 122.732C122.636 122.528 122.708 122.366 122.828 122.246C122.96 122.114 123.158 122.048 123.422 122.048C123.638 122.048 123.92 122.102 124.268 122.21C124.628 122.318 125.108 122.372 125.708 122.372C126.5 122.372 127.208 122.252 127.832 122.012C128.456 121.772 128.978 121.4 129.398 120.896C129.818 120.392 130.136 119.75 130.352 118.97C130.58 118.178 130.694 117.242 130.694 116.162V99.206H134.186V116.09ZM164.349 112.112C164.349 114.044 164.043 115.82 163.431 117.44C162.819 119.048 161.955 120.434 160.839 121.598C159.723 122.762 158.379 123.668 156.807 124.316C155.247 124.952 153.519 125.27 151.623 125.27C149.727 125.27 147.999 124.952 146.439 124.316C144.879 123.668 143.541 122.762 142.425 121.598C141.309 120.434 140.445 119.048 139.833 117.44C139.221 115.82 138.915 114.044 138.915 112.112C138.915 110.18 139.221 108.41 139.833 106.802C140.445 105.182 141.309 103.79 142.425 102.626C143.541 101.45 144.879 100.538 146.439 99.89C147.999 99.242 149.727 98.918 151.623 98.918C153.519 98.918 155.247 99.242 156.807 99.89C158.379 100.538 159.723 101.45 160.839 102.626C161.955 103.79 162.819 105.182 163.431 106.802C164.043 108.41 164.349 110.18 164.349 112.112ZM160.767 112.112C160.767 110.528 160.551 109.106 160.119 107.846C159.687 106.586 159.075 105.524 158.283 104.66C157.491 103.784 156.531 103.112 155.403 102.644C154.275 102.176 153.015 101.942 151.623 101.942C150.243 101.942 148.989 102.176 147.861 102.644C146.733 103.112 145.767 103.784 144.963 104.66C144.171 105.524 143.559 106.586 143.127 107.846C142.695 109.106 142.479 110.528 142.479 112.112C142.479 113.696 142.695 115.118 143.127 116.378C143.559 117.626 144.171 118.688 144.963 119.564C145.767 120.428 146.733 121.094 147.861 121.562C148.989 122.018 150.243 122.246 151.623 122.246C153.015 122.246 154.275 122.018 155.403 121.562C156.531 121.094 157.491 120.428 158.283 119.564C159.075 118.688 159.687 117.626 160.119 116.378C160.551 115.118 160.767 113.696 160.767 112.112ZM178.399 122.228C179.395 122.228 180.253 122.114 180.973 121.886C181.693 121.658 182.281 121.34 182.737 120.932C183.205 120.512 183.547 120.02 183.763 119.456C183.979 118.88 184.087 118.25 184.087 117.566C184.087 116.234 183.613 115.184 182.665 114.416C181.717 113.636 180.295 113.246 178.399 113.246H172.819V122.228H178.399ZM172.819 101.96V110.762H177.427C178.411 110.762 179.263 110.654 179.983 110.438C180.715 110.222 181.315 109.922 181.783 109.538C182.263 109.154 182.617 108.692 182.845 108.152C183.073 107.6 183.187 107 183.187 106.352C183.187 104.828 182.731 103.718 181.819 103.022C180.907 102.314 179.491 101.96 177.571 101.96H172.819ZM177.571 99.206C179.155 99.206 180.517 99.362 181.657 99.674C182.809 99.986 183.751 100.43 184.483 101.006C185.227 101.582 185.773 102.29 186.121 103.13C186.469 103.958 186.643 104.894 186.643 105.938C186.643 106.574 186.541 107.186 186.337 107.774C186.145 108.35 185.851 108.89 185.455 109.394C185.059 109.898 184.555 110.354 183.943 110.762C183.343 111.158 182.635 111.482 181.819 111.734C183.715 112.094 185.137 112.772 186.085 113.768C187.045 114.752 187.525 116.048 187.525 117.656C187.525 118.748 187.321 119.744 186.913 120.644C186.517 121.544 185.929 122.318 185.149 122.966C184.381 123.614 183.433 124.118 182.305 124.478C181.177 124.826 179.893 125 178.453 125H169.345V99.206H177.571ZM215.023 103.238C214.915 103.418 214.795 103.556 214.663 103.652C214.543 103.736 214.393 103.778 214.213 103.778C214.009 103.778 213.769 103.676 213.493 103.472C213.217 103.268 212.869 103.046 212.449 102.806C212.041 102.554 211.543 102.326 210.955 102.122C210.379 101.918 209.677 101.816 208.849 101.816C208.069 101.816 207.379 101.924 206.779 102.14C206.191 102.344 205.693 102.626 205.285 102.986C204.889 103.346 204.589 103.772 204.385 104.264C204.181 104.744 204.079 105.266 204.079 105.83C204.079 106.55 204.253 107.15 204.601 107.63C204.961 108.098 205.429 108.5 206.005 108.836C206.593 109.172 207.253 109.466 207.985 109.718C208.729 109.958 209.485 110.21 210.253 110.474C211.033 110.738 211.789 111.038 212.521 111.374C213.265 111.698 213.925 112.112 214.501 112.616C215.089 113.12 215.557 113.738 215.905 114.47C216.265 115.202 216.445 116.102 216.445 117.17C216.445 118.298 216.253 119.36 215.869 120.356C215.485 121.34 214.921 122.198 214.177 122.93C213.445 123.662 212.539 124.238 211.459 124.658C210.391 125.078 209.173 125.288 207.805 125.288C206.125 125.288 204.601 124.988 203.233 124.388C201.865 123.776 200.695 122.954 199.723 121.922L200.731 120.266C200.827 120.134 200.941 120.026 201.073 119.942C201.217 119.846 201.373 119.798 201.541 119.798C201.697 119.798 201.871 119.864 202.063 119.996C202.267 120.116 202.495 120.272 202.747 120.464C202.999 120.656 203.287 120.866 203.611 121.094C203.935 121.322 204.301 121.532 204.709 121.724C205.129 121.916 205.603 122.078 206.131 122.21C206.659 122.33 207.253 122.39 207.913 122.39C208.741 122.39 209.479 122.276 210.127 122.048C210.775 121.82 211.321 121.502 211.765 121.094C212.221 120.674 212.569 120.176 212.809 119.6C213.049 119.024 213.169 118.382 213.169 117.674C213.169 116.894 212.989 116.258 212.629 115.766C212.281 115.262 211.819 114.842 211.243 114.506C210.667 114.17 210.007 113.888 209.263 113.66C208.519 113.42 207.763 113.18 206.995 112.94C206.227 112.688 205.471 112.4 204.727 112.076C203.983 111.752 203.323 111.332 202.747 110.816C202.171 110.3 201.703 109.658 201.343 108.89C200.995 108.11 200.821 107.15 200.821 106.01C200.821 105.098 200.995 104.216 201.343 103.364C201.703 102.512 202.219 101.756 202.891 101.096C203.575 100.436 204.409 99.908 205.393 99.512C206.389 99.116 207.529 98.918 208.813 98.918C210.253 98.918 211.561 99.146 212.737 99.602C213.925 100.058 214.969 100.718 215.869 101.582L215.023 103.238ZM237.288 122.156L237.27 125H221.376V99.206H237.27V102.05H224.868V110.618H234.912V113.354H224.868V122.156H237.288ZM258.065 122.156L258.047 125H242.153V99.206H258.047V102.05H245.645V110.618H255.689V113.354H245.645V122.156H258.065ZM266.405 110.51H267.719C268.175 110.51 268.541 110.456 268.817 110.348C269.093 110.228 269.345 110.03 269.573 109.754L278.159 100.034C278.399 99.722 278.651 99.506 278.915 99.386C279.179 99.266 279.503 99.206 279.887 99.206H282.839L273.011 110.312C272.771 110.6 272.537 110.84 272.309 111.032C272.093 111.212 271.859 111.362 271.607 111.482C271.931 111.59 272.225 111.752 272.489 111.968C272.753 112.172 273.011 112.442 273.263 112.778L283.523 125H280.499C280.271 125 280.073 124.988 279.905 124.964C279.749 124.928 279.611 124.88 279.491 124.82C279.371 124.748 279.263 124.67 279.167 124.586C279.083 124.49 278.999 124.382 278.915 124.262L270.023 114.02C269.783 113.72 269.525 113.51 269.249 113.39C268.973 113.258 268.553 113.192 267.989 113.192H266.405V125H262.931V99.206H266.405V110.51ZM302.679 122.156L302.661 125H286.767V99.206H302.661V102.05H290.259V110.618H300.303V113.354H290.259V122.156H302.679ZM314.69 111.698C315.698 111.698 316.586 111.578 317.354 111.338C318.134 111.086 318.782 110.738 319.298 110.294C319.826 109.838 320.222 109.298 320.486 108.674C320.75 108.05 320.882 107.36 320.882 106.604C320.882 105.068 320.378 103.91 319.37 103.13C318.362 102.35 316.85 101.96 314.834 101.96H311.018V111.698H314.69ZM326.606 125H323.51C322.874 125 322.406 124.754 322.106 124.262L315.41 115.046C315.206 114.758 314.984 114.554 314.744 114.434C314.516 114.302 314.156 114.236 313.664 114.236H311.018V125H307.544V99.206H314.834C316.466 99.206 317.876 99.374 319.064 99.71C320.252 100.034 321.23 100.508 321.998 101.132C322.778 101.756 323.354 102.512 323.726 103.4C324.098 104.276 324.284 105.26 324.284 106.352C324.284 107.264 324.14 108.116 323.852 108.908C323.564 109.7 323.144 110.414 322.592 111.05C322.052 111.674 321.386 112.208 320.594 112.652C319.814 113.096 318.926 113.432 317.93 113.66C318.374 113.912 318.758 114.278 319.082 114.758L326.606 125Z" fill="black"/>
                <g filter="url(#filter0_d)">
                    <path d="M31 170.01L238 170" stroke="black" stroke-width="4"/>
                </g>
                <g filter="url(#filter1_f)">
                    <path d="M305 159.5L305 434.5L305 555.99" stroke="black" stroke-width="4"/>
                </g>
                <g filter="url(#filter2_f)">
                    <path d="M31 404.01L238 404" stroke="black" stroke-width="4"/>
                </g>
                <g filter="url(#filter3_f)">
                    <path d="M31 489.01L238 489" stroke="black" stroke-opacity="0.5" stroke-width="4"/>
                </g>
                <g filter="url(#filter4_d)">
                    <path d="M73 201.007L238 201" stroke="black" stroke-width="4"/>
                </g>
                <g filter="url(#filter5_d)">
                    <path d="M111 223.007L265 222" stroke="black" stroke-width="2"/>
                </g>
                <g filter="url(#filter6_d)">
                    <path d="M342 188.003L421 187.999" stroke="black" stroke-width="2"/>
                </g>
                <g filter="url(#filter7_d)">
                    <path d="M342 211.004L421 211" stroke="black" stroke-width="2"/>
                </g>
                <g filter="url(#filter8_d)">
                    <path d="M342 238.004L421 238" stroke="black" stroke-width="2"/>
                </g>
                <g filter="url(#filter9_d)">
                    <path d="M342 319.004L421 319" stroke="black" stroke-width="2"/>
                </g>
                <g filter="url(#filter10_d)">
                    <path d="M342 342.004L421 342.001" stroke="black" stroke-width="2"/>
                </g>
                <g filter="url(#filter11_d)">
                    <path d="M342 369.004L421 369.001" stroke="black" stroke-width="2"/>
                </g>
                <g filter="url(#filter12_d)">
                    <path d="M342 450.004L421 450" stroke="black" stroke-opacity="0.4" stroke-width="2"/>
                </g>
                <g filter="url(#filter13_d)">
                    <path d="M342 473.004L421 473.001" stroke="black" stroke-opacity="0.4" stroke-width="2"/>
                </g>
                <g filter="url(#filter14_d)">
                    <path d="M342 500.004L421 500.001" stroke="black" stroke-opacity="0.4" stroke-width="2"/>
                </g>
                <g filter="url(#filter15_d)">
                    <path d="M111 300.007L265 300" stroke="black" stroke-width="2"/>
                </g>
                <g filter="url(#filter16_d)">
                    <path d="M111 313L265 313.993" stroke="black" stroke-width="2"/>
                </g>
                <g filter="url(#filter17_d)">
                    <path d="M111 330L265 330.993" stroke="black" stroke-width="2"/>
                </g>
                <g filter="url(#filter18_d)">
                    <path d="M111 239.007L265 238" stroke="black" stroke-width="2"/>
                </g>
                <g filter="url(#filter19_d)">
                    <path d="M111 255.007L265 254" stroke="black" stroke-width="2"/>
                </g>
                <g filter="url(#filter20_d)">
                    <path d="M73 276.007L238 276" stroke="black" stroke-width="4"/>
                </g>
                <g filter="url(#filter21_d)">
                    <path d="M73 463.007L238 463" stroke="black" stroke-opacity="0.6" stroke-width="4"/>
                </g>
                <g filter="url(#filter22_d)">
                    <path d="M73 429.007L238 429" stroke="black" stroke-opacity="0.7" stroke-width="4"/>
                </g>
                <g filter="url(#filter23_d)">
                    <path d="M73 513.007L238 513" stroke="black" stroke-opacity="0.2" stroke-width="4"/>
                </g>
                <g filter="url(#filter24_d)">
                    <path d="M73 543.007L238 543" stroke="black" stroke-opacity="0.1" stroke-width="4"/>
                </g>
                <g filter="url(#filter25_d)">
                    <path d="M73 351.007L238 351" stroke="black" stroke-width="4"/>
                </g>
                <g filter="url(#filter26_d)">
                    <path d="M73 378.007L238 378" stroke="black" stroke-width="4"/>
                </g>
                <defs>
                    <filter id="filter0_d" x="27" y="168" width="215" height="12.0097" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter1_f" x="299" y="155.5" width="12.0001" height="404.49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur"/>
                    </filter>
                    <filter id="filter2_f" x="27" y="398" width="215" height="12.0097" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur"/>
                    </filter>
                    <filter id="filter3_f" x="27" y="483" width="215" height="12.0097" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur"/>
                    </filter>
                    <filter id="filter4_d" x="69" y="199" width="173" height="12.0065" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter5_d" x="106.993" y="221" width="162.013" height="11.0065" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter6_d" x="338" y="186.999" width="87.0001" height="10.0036" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter7_d" x="338" y="210" width="87.0001" height="10.0036" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter8_d" x="338" y="237" width="87.0001" height="10.0036" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter9_d" x="338" y="318" width="87.0001" height="10.0036" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter10_d" x="338" y="341.001" width="87.0001" height="10.0036" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter11_d" x="338" y="368.001" width="87.0001" height="10.0036" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter12_d" x="338" y="449" width="87.0001" height="10.0036" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter13_d" x="338" y="472.001" width="87.0001" height="10.0036" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter14_d" x="338" y="499.001" width="87.0001" height="10.0036" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter15_d" x="107" y="299" width="162" height="10.0065" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter16_d" x="106.994" y="312" width="162.013" height="10.9934" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter17_d" x="106.994" y="329" width="162.013" height="10.9934" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter18_d" x="106.993" y="237" width="162.013" height="11.0065" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter19_d" x="106.993" y="253" width="162.013" height="11.0065" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter20_d" x="69" y="274" width="173" height="12.0065" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter21_d" x="69" y="461" width="173" height="12.0065" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter22_d" x="69" y="427" width="173" height="12.0065" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter23_d" x="69" y="511" width="173" height="12.0065" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter24_d" x="69" y="541" width="173" height="12.0065" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter25_d" x="69" y="349" width="173" height="12.0065" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter26_d" x="69" y="376" width="173" height="12.0065" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default App
