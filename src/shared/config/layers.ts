export enum LAYERS {
  background,
  widgets,
  apps,
  notifications,
  dialogs
}

const mult = 100

function createLayerOrder(): Record<LAYERS, number> {
  const result: Record<LAYERS, number> = {} as Record<LAYERS, number>;
  let value = 0;

  Object.keys(LAYERS)
    .filter((key) => isNaN(Number(key))) 
    .forEach((key) => {
      result[LAYERS[key as keyof typeof LAYERS]] = value;
      value += mult;
    });

  return result;
}


export const config_layers = createLayerOrder();

export const getZIndexByLayer = (layerName: LAYERS, order: number = 0) => {
  try {
    if (order < 0 || order >= mult) throw new Error('Invalid order for element')
    return config_layers[layerName] + order
  } catch(error) {
    console.error(error)
  }
}