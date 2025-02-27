# bbnocode-nextjs

bbnocode-nextjs 是一个快速构建个人sass的nextjs模版项目


## 技术栈

- `Biome`: 用于检查格式化工具
- `@changesets/cli`:  用来管理版本变更,生成变更文件
- `Fumadocs`: 用于做mdx文档站点

##  Biome 配置说明

Biome 是一个高性能的 JavaScript/TypeScript 工具链，包含代码格式化、lint 检查等功能。以下是配置文件的详细说明。


```json
"formatter": {
  "enabled": true,
  "useEditorconfig": true
}
```

- `enabled`: 启用代码格式化功能
- `useEditorconfig`: 使用 .editorconfig 文件中的配置


```json
"linter": {
  "enabled": true,
  "rules": {
   "recommended": true,
   "suspicious": {
    "noExplicitAny": "off",
    "noArrayIndexKey": "off"
   },
   "complexity": {
    "noForEach": "off"
   },
   "correctness": {
    "useExhaustiveDependencies": "off",
    "noUnusedImports": "error",
    "noUnusedFunctionParameters": "warn"
   },
   "style": {
    "noUnusedTemplateLiteral": {
     "level": "error",
     "fix": "safe"
    },
    "noNonNullAssertion": "warn",
    "useBlockStatements": "warn"
   }
  }
 }

```

可疑代码规则 (suspicious)

- `noExplicitAny: "off"` - 允许使用 `any` 类型
- `noArrayIndexKey: "off"` - 允许使用数组索引作为 React key

复杂度规则 (complexity)

- `noForEach: "off"` - 允许使用 `forEach` 方法

正确性规则 (correctness)

- `useExhaustiveDependencies: "off"` - 关闭依赖项完整性检查
- `noUnusedImports: "error"` - 禁止未使用的导入
- `noUnusedFunctionParameters: "warn"` - 警告未使用的函数参数

样式规则 (style)

- `noUnusedTemplateLiteral: "error"` - 禁止未使用的模板字符串
- `noNonNullAssertion: "warn"` - 警告使用非空断言操作符
- `useBlockStatements: "warn"` - 建议使用代码块语句

导入组织规则 (organizeImports)


文件配置 (files)

`ignore`: 配置需要忽略的文件路径


(javascript)

`jsxRuntime`: 配置 JSX 运行时，可选值为 `classic` 和 `automatic`

版本控制 (vcs)

- `enabled`: 启用版本控制功能
- `clientKind`: 版本控制工具
- `defaultBranch`: 默认分支
- `useIgnoreFile`: 使用 .gitignore 文件


## changesets 说明

changesets 是一个用于管理版本变更的工具，它可以自动生成变更文件，并将变更文件提交到版本控制系统中。以下是配置文件的详细说明。

```json
{
  "scripts": {
    "changeset": "changeset",
    "version": "changeset version",
    "release": "changeset publish"
  }
}
```

- `changeset`: 运行 changeset 命令，生成变更文件
- `version`: 运行 changeset version 命令，更新变更文件中的版本号
- `release`: 运行 changeset publish 命令，将变更文件提交到版本控制系统中

```bash
# 1. 创建变更集
pnpm changeset

# 2. 选择要更新的包和版本类型（patch/minor/major）
# 3. 添加变更说明

# 4. 更新版本号
pnpm version

# 5. 发布到 npm
pnpm release
```
