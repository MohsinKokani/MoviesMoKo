let lightArr = ['--lightBG', '--lightTextColor', '--lightColor1', '--lightColor2', '--lightColor3', '--lightColor4']
let lightColor = ['#fbff87', '#333333', '#F44336', '#ffe100', '#db7120', '#2196F3']
let darkArr = ['--darkBG', '--darkTextColor', '--darkColor1', '--darkColor2', '--darkColor3', '--darkColor4']
let darkColor = ['#9000ff', '#FFFFFF', '#FF4081', '#ffe100', '#8BC34A', '#ffe100']


function toggle() {
    let root = document.querySelector(':root');
    let rootStyle = getComputedStyle(root);

    if (rootStyle.getPropertyValue('--lightBG').trim() === '#fbff87') {
        //light mode to dark
        document.title='MoviesMoKo ☀️';
        for (let i = 0; i < lightArr.length; i++) {
            const lightProp = lightArr[i];
            const lightValue = lightColor[i];
            const darkProp = darkArr[i];
            const darkValue = darkColor[i];
            let tmp;
            root.style.setProperty(lightProp, darkValue);
            root.style.setProperty(darkProp, lightValue);
            tmp = lightColor[i];
            lightColor[i] = darkColor[i];
            darkColor[i] = tmp;
        }
    }
    else {
        document.title='MoviesMoKo 🌙'
        for (let i = 0; i < lightArr.length; i++) {
            const lightProp = lightArr[i];
            const lightValue = lightColor[i];
            const darkProp = darkArr[i];
            const darkValue = darkColor[i];
            let tmp;
            root.style.setProperty(lightProp, lightValue);
            root.style.setProperty(darkProp, darkValue);
            tmp = lightColor[i];
            lightColor[i] = darkColor[i];
            darkColor[i] = tmp;
        }
    }
}

export default function DarkModeToggle() {
    return (
        <div className="toggle" onClick={toggle}>
            <input type="checkbox" id="toggle" />
            <label htmlFor="toggle"></label>
        </div>
    )
}