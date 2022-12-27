import React from 'react';
import {ScaleHeight, ScaleWidth, fontScale} from '@/utils/scale';

import CustomText from '@/utils/CustomText';
import {StyleSheet, View} from 'react-native';
import colors from '@/utils/color';

const ListBlockComponent = ({...item}) => {

  const RenderItem2 = ({text}: any) => (
    <View>
      <View style={styles.itemsLine} />
      <CustomText style={styles.itemStyle} textType="Rubik-Regular">
        {text}
      </CustomText>
    </View>
  );

  return (
    <View>
      <CustomText textType="Rubik-Bold" style={styles.listStyles}>
      {item.title}
      </CustomText>
      <View style={styles.listWrapper}>
        {item.items_list.map( i => (
          <RenderItem2 key={item.items_list.id} text={i} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    marginBottom: 98 * ScaleHeight,
  },

  itemsLine: {
    marginLeft: 24 * ScaleWidth,
    marginBottom: 8 * ScaleHeight,
    width: 326 * ScaleWidth,
    backgroundColor: '#003366',
    height: 1 * ScaleHeight,
  },
  itemStyle: {
    color: '#003366',
    width: 326 * ScaleWidth,
    fontSize: 12,
    textTransform: 'uppercase',
    marginBottom: 16 * ScaleHeight,
    marginLeft: 24 * ScaleWidth,
  },
  listStyles: {
    marginLeft: 24 * ScaleWidth,
    marginBottom: 20 * ScaleHeight,
    color: '#003366',
    fontSize: (18 * ScaleHeight) / fontScale,
  },
});

export default ListBlockComponent;
