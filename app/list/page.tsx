import CodeExampleSelect from '@/components/CurrentColorScheme/CodeExampleSelect';
import getColorSchemes from '@/requests/getColorSchemes';
import getColorsForCssVars from '@/utilities/getColorsForCssVars';

const ListView = async () => {
  const colorSchemes = await getColorSchemes();

  return colorSchemes.map((colorScheme) => {
    const colorsForCssVars = getColorsForCssVars(colorScheme);
    return (
      <div key={colorScheme.name} style={colorsForCssVars}>
        {colorScheme.name}
        <CodeExampleSelect />
      </div>
    );
  });
};

export default ListView;
