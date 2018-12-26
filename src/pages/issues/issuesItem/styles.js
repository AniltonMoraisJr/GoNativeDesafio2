import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: metrics.baseMargin,
    marginVertical: metrics.baseMargin - 15,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: metrics.basePadding,
  },
  title: {
    fontSize: 16,
    color: colors.black,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 12,
    color: colors.lightgray,
  },
  icon: {
    color: colors.lightgray,
  },
});

export default styles;
