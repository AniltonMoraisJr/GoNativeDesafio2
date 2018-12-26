import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: metrics.baseMargin,
    marginBottom: metrics.baseMargin - 10,
    paddingVertical: metrics.basePadding,
    borderBottomColor: colors.lightgray,
    borderBottomWidth: 1,
  },
  error: {
    textAlign: 'center',
    color: '#F55',
  },

  input: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius - 2,
    padding: metrics.basePadding,
    color: colors.black,
    height: 44,
  },
  icon: {
    marginLeft: metrics.baseMargin,
    color: colors.black,
  },
});

export default styles;
