---
layout: post
title: Use MathJax 3 in Jekyll
---

Recently I have built [my GitHub Pages site](https://github.com/zxqaiycx/zxqaiycx.github.io) and customized it using [Jekyll]( https://jekyllrb.com/ ), a static site generator. More specifically, I fork [Beautiful Jekyll]( https://github.com/daattali/beautiful-jekyll ), modify it and make my own site. I will make note of the problems I've encountered in this post. 

## MathJax 3 in Jekyll and Kramdown

相关步骤完成后，个人主页可以正常显示了，不过如果 markdown 文件中如果含有 block math equations，网页渲染的时候公式不显示，此时公式处的网页源代码形如 `<script type="math/tex; mode=display">...</script>`，浏览器不会渲染这段代码。

用 [MathJax](http://docs.mathjax.org/en/latest/index.html) 可以解决这个问题，简单地说就是把浏览器不知道怎么显示的
- `<script type="math/tex">...</script>`
- `<script type="math/tex; mode=display">...</script>`
- `<p>\begin{equation} ... \end{equation}</p>`
- `<p>$$ ...  $$</p>`

等代码处理成浏览器能正常显示的形式。

MathJax 有 version 2 和 version 3， v2 的参考资料有：
- [https://github.com/daattali/beautiful-jekyll/issues/195](https://github.com/daattali/beautiful-jekyll/issues/195)
- [https://github.com/jekyll/jekyll/issues/4146](https://github.com/jekyll/jekyll/issues/4146) 
- [http://flennerhag.com/2017-01-14-latex/#mjx-eqn-label](http://flennerhag.com/2017-01-14-latex/#mjx-eqn-label)

v3 的参考资料有：
- [MathJax 3 in Jekyll and Kramdown](https://11011110.github.io/blog/2019/10/17/mathjax-3-jekyll.html)
- [https://github.com/mathjax/MathJax/issues/2220](https://github.com/mathjax/MathJax/issues/2220)
- [Changes in the MathJax API](http://docs.mathjax.org/en/latest/upgrading/v2.html#changes-in-the-mathjax-api)

我用了 MathJax v3，具体做法是在仓库中加入了一个 JavaScript 文件 `load-mathjax.js`，关键内容如下：
```javascript
MathJax = {
  tex: {
    packages: ['base'],        // extensions to use
    inlineMath: [              // start/end delimiter pairs for in-line math
      ['$', '$'], 
      ['\\(', '\\)']
    ],
    displayMath: [             // start/end delimiter pairs for display math
      ['$$', '$$'],
      ['\\[', '\\]']
    ],
    processEscapes: true,      // use \$ to produce a literal dollar sign
    processEnvironments: true, // process \begin{xxx}...\end{xxx} outside math mode
    processRefs: true,         // process \ref{...} outside of math mode
  }
};

(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
  script.async = true;
  document.head.appendChild(script);
})();
```

随后在 `_includes/head.html` 或 `_layouts/base.html` 等文件中调用这段代码即可。

经过以上处理后，测试情况如下：

| Markdown                              | Webpage source                                       | Normally display |
| ------------------------------------- | ---------------------------------------------------- | ---------------- |
| `\\[ ... \\]`                         | `<p>\[ ... \]</p>`                                   | yes              |
| `\$\$ ... \$\$`                       | `<p>$$ ... $$</p>`                                   | yes              |
| `\begin{equation} ... \end{equation}` | `<p>\begin{equation} ... \end{equation}</p>`         | yes              |
| `$$ ... $$`                           | `<script type="math/tex; mode=display">...</script>` | no               |

最后一种情况也是我最常用的，在我本地的 markdown 编辑器中就用这种方式写区块公式。不能正常显示的原因是 MathJax v3 默认不处理 `<script>` 类型的源代码，v2 应该可以正常显示（未测试）。解决方法是在上面的 JavaScript 加入一些代码：
```javascript
MathJax = {
  options: {
    renderActions: {
      /* add a new named action not to override the original 'find' action */
      findScript: [10, function (doc) {
        for (const node of document.querySelectorAll('script[type^="math/tex"]')) {
          const display = !!node.type.match(/; *mode=display/);
          const math = new doc.options.MathItem(node.textContent, doc.inputJax[0], display);
          const text = document.createTextNode('');
          node.parentNode.replaceChild(text, node);
          math.start = {node: text, delim: '', n: 0};
          math.end = {node: text, delim: '', n: 0};
          doc.math.push(math);
        }
      }, '']
    }
  },
  tex: {
    packages: ['base'],        // extensions to use
    inlineMath: [              // start/end delimiter pairs for in-line math
      ['$', '$'], 
      ['\\(', '\\)']
    ],
    displayMath: [             // start/end delimiter pairs for display math
      ['$$', '$$'],
      ['\\[', '\\]']
    ],
    processEscapes: true,      // use \$ to produce a literal dollar sign
    processEnvironments: true, // process \begin{xxx}...\end{xxx} outside math mode
    processRefs: true,         // process \ref{...} outside of math mode
  }
};

(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
  script.async = true;
  document.head.appendChild(script);
})();
```

之后数学公式就可以正常显示了。

### 测试

- `$$ ... $$`: 

$$ TPR = \frac{TP}{P} = \frac{TP}{TP + FN} = 1 - FNR $$

- `\begin{equation} ... \end{equation}`: 

\begin{equation} TNR = \frac{TN}{N} = \frac{TN}{TN + FP} = 1 - FPR \end{equation}

- `\$\$ ... \$\$`: 

\$\$ FPR = \frac{FP}{N} = \frac{FP}{FP + TN} = 1 - TNR \$\$

- `\\[ ... \\]`: 

\\[ FNR = \frac{FN}{P} = \frac{FN}{FN + TP} = 1 - TPR \\]

- 小于号: 

$$
1 < 2 < 3 = \frac{6}{2} 
$$


更多测试：
- `$$ \begin{align*} ... \end{align*} $$`

$$
\begin{align*}
  f(x) &= x^2\\
  g(x) &= \frac{1}{x}\\
  F(x) &= \int^a_b \frac{1}{3}x^3
\end{align*}
$$

- align (without `$$`): 

\begin{align*}
  f(x) &= x^2\\
  g(x) &= \frac{1}{x}\\
  F(x) &= \int^a_b \frac{1}{3}x^3
\end{align*}

- matrix:

$$
\left[
\begin{matrix}
1 & 0\\
0 & 1
\end{matrix}
\right]
$$

- matrix (without `$$`): 

\begin{matrix}
1 & 0\\
0 & 1
\end{matrix}

- fraction: 

$$
 \frac{1}{\displaystyle 1+
   \frac{1}{\displaystyle 2+
   \frac{1}{\displaystyle 3+x}}} +
 \frac{1}{1+\frac{1}{2+\frac{1}{3+x}}}
$$

- integral: 

$$
 \mathop{\int \!\!\! \int}_{\mathbf{x} \in \mathbf{R}^2} 
 \! \langle \mathbf{x},\mathbf{y}\rangle 
 \,d\mathbf{x}
$$

- eqnarray: 

$$
\begin{eqnarray*}
 e^x &\approx& 1+x+x^2/2! + \\
   && {}+x^3/3! + x^4/4! + \\
   && + x^5/5!
\end{eqnarray*}
$$

- eqnarray: 

$$
\begin{eqnarray*}
 x&=&\sin \alpha = \cos \beta\\
  &=&\cos(\pi-\alpha) = \sin(\pi-\beta)
\end{eqnarray*}
$$

- eqnarray: 

$$
\begin{eqnarray}
 y &=& x^4 + 4      \nonumber \\
   &=& (x^2+2)^2 -4x^2 \nonumber \\
   &\le&(x^2+2)^2
\end{eqnarray}
$$

- eqnarray (without `$$`): 

\begin{eqnarray*}
 e^x &\approx& 1+x+x^2/2! + \\
   && {}+x^3/3! + x^4/4! + \\
   && + x^5/5!
\end{eqnarray*}

