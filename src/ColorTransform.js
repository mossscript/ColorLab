let B = new Bundle();

B.setType('url');
B.setKey('<KEY/>');
B.setTemplate('../src/bundle/template.js');
B.addVariables('WebColors','../src/bundle/source/webColors.json');

B.bundle();

B.onbundled = ()=> B.apply();