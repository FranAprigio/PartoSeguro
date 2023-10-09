import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native'

export const BackgroundComponent = ({ children, flexStyle, isOpacity }) => {
    const isNull = flexStyle === 'null';
    const estilo = isNull ? styles.containerNoFlex : styles.container;

    let colors = ['#FCCCD4', '#FCE5BF', '#E3C3B9'];
    function getColors() {
        if (isOpacity === "true") {
            colors = ['#FCCCD480', '#FCE5BF80', '#E3C3B980'];
        }
        return colors;
    }

    return (
        <LinearGradient
            colors={getColors()}
            locations={[0.3, 0.6, 1]}
            useAngle={true}
            angle={180}
            angleCenter={{ x: 0.5, y: 0.5 }}
            style={estilo}
        >
            {children}
        </LinearGradient>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerNoFlex: {
    }
})