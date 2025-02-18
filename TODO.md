### Sprint 1 (Feb8 - 14) CV-1
priority: 🔥 high, ⏹️ medium, 🥶 low, ⚡ quick win

each storypoint around 1 hour free time

|day2||
|--|--|
|all storypoint|======================|
|progress|======================|
|CV-5|====|
|CV-2|==|
|CV-6|======|

### CV-1 Essential for Production Shipping 🔥
|number# | done | desc | storypoints |priority|
|--|--|------|---|--|
|1.|✅| Add Soft Skill slide|4||
|2.|✅| RWD mobile|4||
|3.|✅| RWD tablet|4||
|4.|✅| project content|2||
|5.|✅| deployment|4||
|6.|✅| Add Skill Tree slide|4||

### bugfix
1. fix 14 eslint errors during build
2. fix image size. good lighthouse results
3. fix css animation by gpu accelerated attributes

---
### CV-2 Code Excellence 🔥
|number# | done | desc | storypoints |priority|
|--|--|------|---|--|
|1.| N| SSR|4||
|2.|✅| remove all errors|2||


### CV-3 More Content ⏹️
|number# | done | desc | storypoints |priority|
|--|--|------|---|--|
|1.| N| Wow Project Slide|4||
|2.| N| FalconPack Project Slide|2||

### CV-4 Better user experience ⏹️
|number# | done | desc | storypoints |priority|
|--|--|------|---|--|
|1.|✅| Add Snap function|2||
|2.| N| link to scroll to carousel|1||
|3.| N| Add i18n|4||
|5.|✅| profile pic (quick win)|0.5||

### CV-5 Infra change 
|number# | done | desc | storypoints |priority|
|--|--|------|---|--|
|1.| N| Add content management system (with notion db?)|4|🥶|
|2.|✅| Change to SASS system|4|🔥|

### CV-6 Performance & SEO ⏹️
|1.|✅| optimize image size|2||
|3.|✅| optimize lighthouse|4|⚡|

- the primary stage should keep simple (in terms of technical decision and design pattern) for better flexibility

- Manage CSS with SASS
https://medium.com/@farihatulmaria/how-to-integrate-css-and-sass-in-next-js-6264e75bc268

- D3 hierarchy example:
https://github.com/necolo/d3-mindmap/blob/master/src/index.ts

- rough paper svg: https://codepen.io/Chokcoco/pen/OJWLXPY

Mobile note
顏色要比桌面版簡化。2個重點色+3個變化形 -> 2個重點色系

閱讀性：
白色或是淡色背景更重要，在狹小的視覺空間上有助於閱讀
過多視覺效果不但對效能有負擔，也對使用者造成負擔

視覺體驗完整度
各個頁面要有足夠一致性，讓視覺體驗更完整。於是會有重複的視覺元件排列組合
每個Icon所佔的區塊比例要明確，區塊面積和位置都暗示了按鈕的重要性
darkmagenta

### Sprint 1 post mortem
- Mobile view took longer than expected -> estimation inaccurate without ui
- should leave time for Bugifx phase. After deployed, mobile view has many issues. (took around 1 holiday to finish)
- completed two new features to make mobile view looks nicer (hamburger and navigation highlight)


- SASS
- SASS and SCSS
- Dart SASS?
- modulize with @use, and forward with @forward
- modular in component scope
- avoid excess code: use "_name.scss", use mixin and extend carfully

- manage styles well -- use opinionated framework / document it