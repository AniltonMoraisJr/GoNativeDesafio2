import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: colors.darkgray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: metrics.baseMargin,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
  },
  button: {
    color: colors.lightgray,
  },
  buttonPress: {
    color: colors.black,
    fontWeight: 'bold',
  },
});

export default styles;
