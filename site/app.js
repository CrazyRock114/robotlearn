/* ===== 六个月机器人工程师 · 渲染层 =====
   所有计数均从 SITE 数据实时计算，不硬编码，避免自报统计与数据对不上。 */
(function () {
  'use strict';

  const $ = (s, r) => (r || document).querySelector(s);
  const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- 汇总计算 ---------- */
  function collect() {
    const out = [];
    SITE.months.forEach(m => {
      const push = (r, sec, rtype) => out.push({ m: m.n, sec: sec, kind: r.rt || rtype || r.rtype || 'other', r: r });
      (m.sections || []).forEach(s => {
        (s.resources || []).forEach(r => push(r, s.name, s.rtype));
        (s.hwlinks || []).forEach(r => push(r, s.name, s.rtype));
        ((s.nomachine && s.nomachine.list) || []).forEach(r => push(r, s.name, 'service'));
      });
      (m.parts || []).forEach(p => (p.resources || []).forEach(r => push(r, p.name, p.rtype)));
      if (m.interview && m.interview.link) push(m.interview.link, '面试', 'other');
    });
    return out;
  }
  const ALL = collect();
  const TASKS = [];
  SITE.months.forEach(m => (m.tasks || []).forEach((t, i) => TASKS.push({ m: m.n, i: i, t: t })));

  const KIND = {
    course: '课程 / 视频课', doc: '官方文档', repo: '代码仓库', sim: '仿真器 / 模拟器',
    tool: '在线工具', hardware: '硬件 / 器材', service: '打印 / 制造服务', book: '书',
    data: '模型 / 数据集', other: '其他'
  };
  const FREEC = /免费|^0 |\$0/;

  /* ---------- 核验状态：URL → 状态 ---------- */
  const VF = {};
  SITE.verif.bot.forEach(x => VF[x.u] = { k: 'bot', t: '反爬未打开', tip: '站点有人机验证，' + x.n + ' 的内容页我没能亲自打开；说明与价格均为原文转述' });
  SITE.verif.net.forEach(x => VF[x.u] = { k: 'net', t: '网络受限未验证', tip: '本机出网被拦，' + x.n + ' 既无法证实也无法证伪是否有效；说明与价格均为原文转述' });
  SITE.verif.src.forEach(x => { if (x.u) VF[x.u] = { k: 'src', t: '原文自述未核验', tip: x.note || '' }; });
  const VF_CLS = { bot: 'bad', net: 'bad', src: 'no' };
  const vfBadge = u => {
    const v = u && VF[u];
    return v ? `<span class="pill ${VF_CLS[v.k]}" title="${esc(v.tip)}">⚠ ${esc(v.t)}</span>` : '';
  };
  // 无 URL 的条目若在 src 名单里，按名称匹配
  const vfByName = {};
  SITE.verif.src.forEach(x => { if (!x.u) vfByName[x.n] = x; });

  /* ---------- 顶栏数字 ---------- */
  const uniqUrl = new Set(ALL.filter(x => x.r.u).map(x => x.r.u));
  const stats = [
    [6, '个月路线图'], [TASKS.length, '个动手项目'], [uniqUrl.size, '个可点资源链接'],
    [SITE.errata.length, '处核查修正'], [SITE.glossary.length, '个术语解释']
  ];
  $('#stats').innerHTML = stats.map(s => `<div class="stat"><b>${s[0]}</b><span>${s[1]}</span></div>`).join('');

  // 标题与描述里的数字由数据生成，避免写死的统计与实际条目对不上
  document.title = `${SITE.meta.title} · ${TASKS.length} 个项目 / ${ALL.length} 项资源`;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content',
    `${SITE.meta.subtitle}。基于 Ronin《How to become a Robotics Engineer in 6 months》（X，2026-09-02）与中文逐条核查（2026-09-25），收录 ${ALL.length} 项学习资源、${TASKS.length} 个动手项目、${SITE.errata.length} 处勘误，全部按月整理并标注国内价格与渠道。`);

  // 顶部来源条（数据驱动，含原作者自己的视频频道）
  $('#srcs').innerHTML = [
    { u: SITE.meta.srcOrigin.url, t: '↗ 英文原文 · Ronin @DeRonin_ · ' + SITE.meta.srcOrigin.date },
    { u: SITE.meta.srcArticle.url, t: '↗ 中文核查 · 进化三部曲 · ' + SITE.meta.srcArticle.date },
    { u: SITE.meta.authorChannel.url, t: '▶ 原作者视频频道 · AI & Robotics' }
  ].map(x => `<a href="${esc(x.u)}" target="_blank" rel="noopener noreferrer">${esc(x.t)}</a>`).join('');

  /* ---------- 为什么是机器人 ---------- */
  $('#whyLead').textContent = SITE.why.lead;

  $('#whyReasons').innerHTML = SITE.why.reasons.map(r =>
    `<div class="card"><b style="color:var(--ac)">${esc(r.t)}</b><div style="color:var(--tx2);font-size:14px;margin-top:6px">${esc(r.d)}</div></div>`).join('');

  $('#costCard').innerHTML = `<h3 style="font-size:15px;margin-bottom:10px">${esc(SITE.why.cost.head)}</h3>
    <p style="color:var(--tx2);font-size:14px;margin:0 0 11px">${esc(SITE.why.cost.body)}</p>
    <div class="note warn" style="margin:0"><span class="lb">注意</span>${esc(SITE.why.cost.note)}</div>`;

  $('#reqs').innerHTML = SITE.why.reqs.map(r =>
    `<div style="border-left:2px solid var(--ac);padding-left:12px"><b style="font-size:14.5px">${esc(r.t)}</b>${r.d ? `<div style="color:var(--tx3);font-size:13px">${esc(r.d)}</div>` : ''}</div>`).join('');

  $('#reqNote').textContent = SITE.why.reqNote;

  $('#specialisms').innerHTML = SITE.why.specialisms.map(s =>
    `<span class="pill" style="padding:5px 13px">${esc(s)}</span>`).join('');

  /* ---------- 术语表 ---------- */
  $('#gloss').innerHTML = SITE.glossary.map(g => `<div><b>${esc(g.k)}</b><span>${esc(g.v)}</span></div>`).join('');

  /* ---------- 路线图 ---------- */
  function resBlock(r) {
    const free = FREEC.test(r.p || '');
    const p = r.p ? `<span class="pill ${free ? 'ok' : 'no'}">${esc(r.p)}</span>` : '';
    const u = r.u
      ? `<a href="${esc(r.u)}" target="_blank" rel="noopener noreferrer">${esc(r.n)} ↗</a>`
      : esc(r.n);
    return `<div class="ri"><div class="m">M${r._m}</div><div>
      <div class="nm">${u}</div>
      <div class="ds">${esc(r.d || '')}</div>
      <div class="mt">${p}${vfBadge(r.u)}${vfByName[r.n] ? `<span class="pill no" title="${esc(vfByName[r.n].note)}">⚠ 原文自述未核验</span>` : ''}<span class="pill">${esc(r._sec)}</span></div>
    </div></div>`;
  }

  function monthHTML(m) {
    const tasks = (m.tasks || []).map((t, i) => `
      <div class="tk" data-m="${m.n}" data-i="${i}">
        <div class="bx">✓</div>
        <div><div class="tt">${esc(t.t)}</div><div class="dd">${esc(t.d)}</div></div>
      </div>`).join('');

    let body = `<div class="goal"><b>本月目标：</b>${esc(m.goal)}</div>`;
    if (m.zerocost) body += `<div class="note"><span class="lb">零硬件</span>${esc(m.zerocost)}</div>`;
    if (m.insight) body += `<div class="note">${esc(m.insight)}</div>`;
    if (m.why) body += `<div class="note">${esc(m.why)}</div>`;
    if (m.warn) body += `<div class="note warn"><span class="lb">坑</span>${esc(m.warn)}</div>`;

    // 版本 / 配对表
    if (m.ros2distro) {
      body += `<div class="blk"><h4>ROS 2 版本怎么选</h4><div class="tbw"><table>
        <thead><tr><th>版本</th><th>发布</th><th>停止支持</th><th>怎么选</th><th>备注</th></tr></thead><tbody>` +
        m.ros2distro.map(d => `<tr><td class="mono">${esc(d.v)}</td><td class="mono">${esc(d.rel)}</td>
          <td class="mono">${esc(d.eol)}</td><td>${esc(d.pick)}</td><td style="color:var(--tx3)">${esc(d.note)}</td></tr>`).join('') +
        `</tbody></table></div><div style="color:var(--tx3);font-size:13px;margin-top:9px">${esc(m.ros2rule)}</div>
        <div style="color:var(--tx3);font-size:13px;margin-top:6px">Gazebo 配对：${m.gazeboPair.map(p => esc(p.r) + ' → ' + esc(p.g)).join('　')}。${esc(m.gazeboNote)}</div></div>`;
    }

    if (m.budget) {
      body += `<div class="blk"><h4>工具台预算（原文美元 / 国内口径）</h4><div class="tbw"><table>
        <thead><tr><th>档位</th><th>原文</th><th>国内约 <span class="pill bad">⚠ 估算</span></th><th>包含什么</th></tr></thead><tbody>` +
        m.budget.map(b => `<tr><td><b>${esc(b.tier)}</b></td><td class="mono">$${esc(b.usd)}</td>
          <td class="mono" style="color:var(--warn)">${esc(b.cn)}</td><td style="color:var(--tx2)">${esc(b.items)}</td></tr>`).join('') +
        `</tbody></table></div>`;
      if (m.channel) body += `<div class="note warn"><span class="lb">采购</span>${esc(m.channel.us)}<br><br>
        <b>国内要反过来读：</b>${esc(m.channel.cn)}<br><br>${esc(m.channel.cost)}</div>`;
    }

    (m.sections || []).forEach(s => {
      body += `<div class="blk"><h4>${esc(s.name)}</h4>`;
      if (s.trap) body += `<div class="note warn"><span class="lb">ROS 1 陷阱</span>${esc(s.trap)}</div>`;
      if (s.pick) body += `<div class="note">${esc(s.pick)}</div>`;
      if (s.decision) body += `<div class="grid" style="gap:9px">` + s.decision.map(d =>
        `<div style="background:var(--bg3);border-radius:8px;padding:11px 14px"><b style="font-size:14px">${esc(d.t)}</b>
         <div style="color:var(--tx2);font-size:13.5px;margin-top:4px">${esc(d.d)}</div></div>`).join('') + `</div>`;
      if (s.memorize) body += `<div class="note warn"><span class="lb">必须记住</span>${esc(s.memorize)}</div>`;
      if (s.motors) body += `<div class="grid g2" style="gap:9px;margin-top:10px">` + s.motors.map(x =>
        `<div style="background:var(--bg3);border-radius:8px;padding:11px 14px"><b style="font-size:14px">${esc(x.t)}</b>
         <div style="color:var(--tx2);font-size:13.5px;margin-top:4px">${esc(x.d)}</div></div>`).join('') + `</div>`;
      if (s.tip) body += `<div class="note">${esc(s.tip)}</div>`;
      if (s.gap) body += `<div class="note warn"><span class="lb">机会点</span>${esc(s.gap)}</div>`;
      if (s.headline) body += `<div class="note">${esc(s.headline)}</div>`;
      if (s.errors) body += `<ul class="li">` + s.errors.map(e => `<li><b style="color:var(--warn)">${esc(e.t)}</b> — ${esc(e.f)}</li>`).join('') + `</ul>`;
      if (s.filament) body += `<div class="tbw"><table><thead><tr><th>材料</th><th>什么时候用</th></tr></thead><tbody>` +
        s.filament.map(f => `<tr><td><b>${esc(f.t)}</b></td><td style="color:var(--tx2)">${esc(f.u)}</td></tr>`).join('') + `</tbody></table></div>`;
      if (s.economics) body += `<div class="note warn"><span class="lb">诚实的账</span>${esc(s.economics)}</div>`;
      if (s.nomachine) {
        body += `<div class="note"><b>买不起打印机：</b>${esc(s.nomachine.cn)}</div>`;
        if (s.nomachine.list && s.nomachine.list.length) {
          body += `<div class="rlist" style="margin-top:10px">` + s.nomachine.list.map(r =>
            resBlock(Object.assign({}, r, { _m: m.n, _sec: s.name }))).join('') + `</div>`;
        }
      }
      if (s.hardware) body += `<ul class="li">` + s.hardware.map(h => `<li><b>${esc(h.t)}</b> — ${esc(h.d)}</li>`).join('') + `</ul>`;
      if (s.decision && s.name === '仿真') { /* 已在上方渲染 */ }
      if (s.tiers) body += `<ul class="li">` + s.tiers.map(t => `<li><b>${esc(t.t)}</b> — ${esc(t.d)}</li>`).join('') + `</ul>`;
      if (s.errata) body += `<div class="note warn"><span class="lb">勘误</span>${esc(s.errata)}</div>`;
      if (s.focus && s.focus.length) body += `<ul class="li">` + s.focus.map(f => `<li>${esc(f)}</li>`).join('') + `</ul>`;
      if (s.bom) body += s.bom.map(b => `<div class="note"><b>${esc(b.name)}</b> <span class="pill">${esc(b.usd)}</span>
        <ul class="li" style="margin-top:7px">${b.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join('');
      if (s.cnPrice) {
        const c = s.cnPrice;
        body += `<div class="blk"><h4>${esc(c.head)}</h4>
          <div class="grid g2" style="gap:10px">
            <div class="card" style="text-align:center"><div class="mono" style="font-size:23px;font-weight:800;color:var(--ok)">${esc(c.pair)}</div><div style="color:var(--tx3);font-size:12.5px">主从一对 · 淘宝</div></div>
            <div class="card" style="text-align:center"><div class="mono" style="font-size:23px;font-weight:800;color:var(--ok)">${esc(c.single)}</div><div style="color:var(--tx3);font-size:12.5px">单条从臂 · 淘宝</div></div>
          </div>
          <div class="note">${esc(c.compare)}</div>
          <div class="tbw"><table><thead><tr><th>地区</th><th>单条从臂价格</th></tr></thead><tbody>` +
          c.regions.map(x => `<tr><td>${esc(x.r)}</td><td class="mono">${esc(x.v)}</td></tr>`).join('') +
          `</tbody></table></div>
          <div class="note warn"><span class="lb">关键发现</span>${esc(c.insight)}</div>
          <div class="note">${esc(c.insight2)}</div>
          <div style="color:var(--tx3);font-size:12.5px;margin-top:8px">${esc(c.fx)}</div></div>`;
      }
      if (s.resources && s.resources.length) {
        body += `<div class="rlist" style="margin-top:12px">` + s.resources.map(r =>
          resBlock(Object.assign({}, r, { _m: m.n, _sec: s.name }))).join('') + `</div>`;
      }
      if (s.hwlinks && s.hwlinks.length) {
        body += `<div class="rlist" style="margin-top:12px">` + s.hwlinks.map(r =>
          resBlock(Object.assign({}, r, { _m: m.n, _sec: s.name }))).join('') + `</div>`;
      }
      body += `</div>`;
    });

    (m.parts || []).forEach(p => {
      body += `<div class="blk"><h4>${esc(p.name)}${p.sub ? ' · ' + esc(p.sub) : ''}</h4>`;
      if (p.body) body += `<p style="color:var(--tx2);font-size:14px;margin:0 0 4px">${esc(p.body)}</p>`;
      if (p.focus) body += `<ul class="li">` + p.focus.map(f => `<li>${esc(f)}</li>`).join('') + `</ul>`;
      if (p.resources) body += `<div class="rlist" style="margin-top:12px">` + p.resources.map(r =>
        resBlock(Object.assign({}, r, { _m: m.n, _sec: p.name }))).join('') + `</div>`;
      body += `</div>`;
    });

    if (m.directions) {
      body += `<div class="blk"><h4>三个方向，选一个</h4><div class="grid g3">` + m.directions.map(d =>
        `<div class="cl"><h4>${esc(d.t)}</h4><p>${esc(d.d)}</p></div>`).join('') + `</div>
        <div class="blk"><h4>作品集：招聘方明确说的</h4><div class="grid g2">
          <div class="card"><b style="color:var(--ok)">高信号</b><ul class="li" style="margin-top:8px">` +
          m.portfolio.high.map(x => `<li>${esc(x)}</li>`).join('') + `</ul></div>
          <div class="card"><b style="color:var(--bad)">红旗</b><ul class="li" style="margin-top:8px">` +
          m.portfolio.red.map(x => `<li>${esc(x)}</li>`).join('') + `</ul></div></div></div>
        <div class="blk"><h4>面试</h4>
          <div class="note">${esc(m.interview.body)}<br><br>${esc(m.interview.expect2)}</div>
          <ul class="li">${m.interview.expect.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
          <div class="rlist" style="margin-top:10px">` + resBlock(Object.assign({}, m.interview.link, { _m: 6, _sec: '面试' })) + `</div>
        </div>`;
    }

    if (m.milestone) {
      body += `<div class="blk"><h4>第 ${m.n} 月里程碑 · 月底你应该能做到</h4><ul class="li">` +
        m.milestone.map(x => `<li>${esc(x)}</li>`).join('') + `</ul></div>`;
    }

    if (m.tasks && m.tasks.length) {
      body += `<div class="blk"><h4>本月动手任务</h4>
        <div class="tkhd"><b>${m.tasks.length} 个任务</b><div class="prog"><i id="pg${m.n}" style="width:0"></i></div>
        <span class="rcnt" id="pt${m.n}">0 / ${m.tasks.length}</span></div>
        <div class="grid" style="gap:9px">${tasks}</div></div>`;
    }

    return `<details class="mo" id="m${m.n}"><summary>
        <div class="num">${m.n}</div>
        <div class="tt"><b>第 ${m.n} 月 · ${esc(m.theme)}</b><span>${esc(m.themeEn)}</span></div>
        <div class="dv">›</div></summary>
      <div class="bd">${body}</div></details>`;
  }
  $('#months').innerHTML = SITE.months.map(monthHTML).join('');

  /* ---------- 资源库 ---------- */
  const fM = new Set(), fK = new Set(), fV = new Set();
  let q = '';
  function renderRes() {
    const term = q.trim().toLowerCase();
    const list = ALL.filter(x => {
      if (fM.size && !fM.has(x.m)) return false;
      if (fK.size && !fK.has(x.kind)) return false;
      if (fV.size) { const k = (x.r.u && VF[x.r.u] && VF[x.r.u].k) || (vfByName[x.r.n] ? 'src' : 'ok'); if (!fV.has(k)) return false; }
      if (!term) return true;
      return (x.r.n + ' ' + (x.r.d || '') + ' ' + (x.r.p || '') + ' ' + x.sec + ' ' + (x.r.u || '')).toLowerCase().includes(term);
    });
    const hl = s => {
      if (!term) return esc(s);
      const t = esc(s);
      return t.replace(new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'), '<mark>$1</mark>');
    };
    $('#rlist').innerHTML = list.length ? list.map(x => {
      const free = FREEC.test(x.r.p || '');
      const u = x.r.u ? `<a href="${esc(x.r.u)}" target="_blank" rel="noopener noreferrer">${hl(x.r.n)} ↗</a>` : hl(x.r.n);
      return `<div class="ri"><div class="m">M${x.m}</div><div>
        <div class="nm">${u}</div><div class="ds">${hl(x.r.d || '—')}</div>
        <div class="mt">${x.r.p ? `<span class="pill ${free ? 'ok' : 'no'}">${hl(x.r.p)}</span>` : ''}
          ${vfBadge(x.r.u)}${vfByName[x.r.n] ? `<span class="pill no" title="${esc(vfByName[x.r.n].note)}">⚠ 原文自述未核验</span>` : ''}
          <span class="pill">${esc(KIND[x.kind] || x.kind)}</span>
          <span class="pill">${esc(x.sec)}</span></div></div></div>`;
    }).join('') : '<div class="empty">没有匹配的资源，换个关键词或清空筛选。</div>';
    const flag = list.filter(x => (x.r.u && VF[x.r.u]) || vfByName[x.r.n]).length;
    $('#rcount').textContent = `${list.length} / ${ALL.length} 条资源 · ${uniqUrl.size} 个不重复链接${flag ? ' · ⚠ ' + flag + ' 条未独立核验' : ''}`;
  }
  $('#fm').innerHTML = SITE.months.map(m => `<button class="fb" data-m="${m.n}">第${m.n}月</button>`).join('');
  // 只显示实际有条目的类型，避免出现点了没结果的空按钮
  $('#fk').innerHTML = Object.keys(KIND).map(k => {
    const n = ALL.filter(x => x.kind === k).length;
    return n ? `<button class="fb" data-k="${k}">${KIND[k]} <span style="opacity:.6">${n}</span></button>` : '';
  }).join('');
  $('#srch').addEventListener('input', e => { q = e.target.value; renderRes(); });
  $('#fm').addEventListener('click', e => {
    const b = e.target.closest('[data-m]'); if (!b) return;
    const v = +b.dataset.m; fM.has(v) ? fM.delete(v) : fM.add(v);
    b.classList.toggle('on'); renderRes();
  });
  $('#fk').addEventListener('click', e => {
    const b = e.target.closest('[data-k]'); if (!b) return;
    const v = b.dataset.k; fK.has(v) ? fK.delete(v) : fK.add(v);
    b.classList.toggle('on'); renderRes();
  });
  $('#rreset').addEventListener('click', () => {
    fM.clear(); fK.clear(); fV.clear(); q = ''; $('#srch').value = '';
    document.querySelectorAll('.fb').forEach(b => b.classList.remove('on')); renderRes();
  });
  // 核验状态筛选
  $('#vfCnt').textContent = SITE.verif.bot.length + SITE.verif.net.length + SITE.verif.src.length;
  $('#fv').innerHTML = [
    { k: 'ok', t: '已亲自打开验证', c: 'ok' },
    { k: 'bot', t: '反爬未打开', c: 'bad' },
    { k: 'net', t: '网络受限未验证', c: 'bad' },
    { k: 'src', t: '原文自述未核验', c: 'no' }
  ].map(x => `<button class="fb" data-v="${x.k}">${x.t}</button>`).join('');
  $('#fv').addEventListener('click', e => {
    const b = e.target.closest('[data-v]'); if (!b) return;
    const v = b.dataset.v; fV.has(v) ? fV.delete(v) : fV.add(v);
    b.classList.toggle('on'); renderRes();
  });
  renderRes();

  /* ---------- 项目总览 ---------- */
  $('#ptot').textContent = `${TASKS.length}`;
  $('#projectList').innerHTML = SITE.months.map(m => `
    <div class="mo" style="padding:0">
      <div style="padding:15px 20px;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:13px">
        <div class="num" style="flex:0 0 34px;height:34px;border-radius:9px;display:grid;place-items:center;font-weight:800;font-size:14px;background:linear-gradient(135deg,var(--ac),var(--ac2));color:#04101f">${m.n}</div>
        <b style="font-size:15px">第 ${m.n} 月 · ${esc(m.theme)}</b>
        <span class="rcnt" style="margin-left:auto">${(m.tasks || []).length} 个任务</span></div>
      <div class="bd" style="border-top:none"><div class="grid" style="gap:9px;margin-top:14px">` +
    (m.tasks || []).map((t, i) => `
        <div class="tk" data-m="${m.n}" data-i="${i}">
          <div class="bx">✓</div>
          <div><div class="tt">${esc(t.t)}</div><div class="dd">${esc(t.d)}</div></div></div>`).join('') +
    `</div><div style="margin-top:13px"><a class="pill" href="#m${m.n}" data-jump="${m.n}" style="padding:6px 13px">在路线图中展开第 ${m.n} 月 →</a></div></div>
    </div>`).join('');

  /* ---------- 打卡（localStorage） ---------- */
  const KEY = 'robot6m.progress.v1';
  let done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { done = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) { } };

  function paint() {
    TASKS.forEach(t => {
      const k = t.m + '-' + t.i;
      document.querySelectorAll(`.tk[data-m="${t.m}"][data-i="${t.i}"]`)
        .forEach(e => e.classList.toggle('done', !!done[k]));
    });
    SITE.months.forEach(m => {
      const n = (m.tasks || []).length, c = (m.tasks || []).filter((_, i) => done[m.n + '-' + i]).length;
      const p = $('#pg' + m.n), t = $('#pt' + m.n);
      if (p) p.style.width = (n ? c / n * 100 : 0) + '%';
      if (t) t.textContent = `${c} / ${n}`;
    });
    const c = TASKS.filter(t => done[t.m + '-' + t.i]).length;
    const p = $('#pall'), t = $('#tall');
    if (p) p.style.width = (c / TASKS.length * 100) + '%';
    if (t) t.textContent = `${c} / ${TASKS.length} 已完成`;
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('.tk .bx'); if (!b) return;
    const box = b.parentElement, m = box.dataset.m, i = box.dataset.i, k = m + '-' + i;
    done[k] = !done[k]; save(); paint();
  });
  document.addEventListener('click', e => {
    const j = e.target.closest('[data-jump]'); if (!j) return;
    const d = document.getElementById('m' + j.dataset.jump);
    if (d) { d.open = true; d.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
  $('#reset').addEventListener('click', () => {
    if (!confirm('清空全部打卡进度？')) return;
    done = {}; save(); paint();
  });
  paint();

  /* ---------- 硬件与预算总览 ---------- */
  $('#budgetTbl').innerHTML = `<table><thead><tr><th>档位</th><th>原文</th><th>国内约 <span class="pill bad">⚠ 估算</span></th><th>包含</th></tr></thead><tbody>` +
    SITE.months[0].budget.map(b => `<tr><td><b>${esc(b.tier)}</b></td><td class="mono">$${esc(b.usd)}</td>
      <td class="mono" style="color:var(--warn)">${esc(b.cn)}</td><td style="color:var(--tx2)">${esc(b.items)}</td></tr>`).join('') +
    `</tbody></table>`;
  $('#budgetWarn').textContent = SITE.provenance[2].items.join('　·　');

  /* ---------- 行业数据 ---------- */
  const d = SITE.data;
  const ifrSrc = $('#ifrSrc');
  if (ifrSrc) ifrSrc.textContent = d.ifr.src;
  $('#ifrGlobal').innerHTML = `<table><thead><tr><th>指标</th><th>数值</th><th>说明</th></tr></thead><tbody>` +
    d.ifr.global.map(x => `<tr><td>${esc(x.k)}</td><td><b style="color:var(--ok)">${esc(x.v)}</b></td><td style="color:var(--tx2)">${esc(x.d)}</td></tr>`).join('') + `</tbody></table>`;
  $('#ifrCn').innerHTML = `<table><thead><tr><th>指标</th><th>数值</th><th>说明</th></tr></thead><tbody>` +
    d.ifr.cn.map(x => `<tr><td>${esc(x.k)}</td><td><b style="color:var(--ac)">${esc(x.v)}</b></td><td style="color:var(--tx2)">${esc(x.d)}</td></tr>`).join('') + `</tbody></table>`;
  $('#ifrOther').innerHTML = `<table><thead><tr><th>国家</th><th>2025 年装机</th><th>说明</th></tr></thead><tbody>` +
    d.ifr.other.map(x => `<tr><td><b>${esc(x.k)}</b></td><td class="mono">${esc(x.v)}</td><td style="color:var(--tx2)">${esc(x.d)}</td></tr>`).join('') + `</tbody></table>`;
  $('#ifrDens').innerHTML = `<table><thead><tr><th>地区</th><th>每万名制造业员工机器人密度</th><th>全球排名</th></tr></thead><tbody>` +
    d.ifr.density.map(x => `<tr><td><b>${esc(x.k)}</b></td><td class="mono">${esc(x.v)}</td><td style="color:var(--tx2)">${esc(x.d)}</td></tr>`).join('') + `</tbody></table>`;

  $('#usCap').innerHTML = `<table><thead><tr><th>项目</th><th>数值</th><th>说明</th></tr></thead><tbody>` +
    d.us.capital.map(x => `<tr><td>${esc(x.k)}</td><td><b>${esc(x.v)}</b></td><td style="color:var(--tx2)">${esc(x.d)}</td></tr>`).join('') + `</tbody></table>`;
  $('#usSal').innerHTML = `<table><thead><tr><th>口径</th><th>区间</th><th>说明</th></tr></thead><tbody>` +
    d.us.salary.map(x => `<tr><td>${esc(x.k)}</td><td class="mono"><b>${esc(x.v)}</b></td><td style="color:var(--tx2)">${esc(x.d)}</td></tr>`).join('') + `</tbody></table>`;

  $('#ifrSum').innerHTML = `<b>${esc(d.ifr.summary)}</b>`;

  $('#usNotes').innerHTML = [
    { t: '劳动力市场比软件小得多', d: d.us.labor },
    { t: '美国之外，用于校准', d: d.us.abroad },
    { t: '自由职业与外包', d: d.us.freelance },
    { t: '不需要学位的入口', d: d.us.entries }
  ].map(x => `<div class="cl"><h4>${esc(x.t)}</h4><p>${esc(x.d)}</p></div>`).join('')
    + `<div class="cl" style="border-color:rgba(255,176,32,.35)"><h4 style="color:var(--warn)">对第一条的诚实提醒</h4><p>${esc(d.us.honest)}</p></div>`;

  $('#methodTxt').textContent = d.method;
  $('#notVer').textContent = SITE.notVerified;
  $('#lastCn').textContent = SITE.lastLineCn;

  /* ---------- 勘误 ---------- */
  $('#errataList').innerHTML = SITE.errata.map(e => `<div class="er">
    <div class="hd"><div class="no">${e.n}</div><h3>${esc(e.title)}</h3><span class="pill no">${esc(e.where)}</span></div>
    <dl>
      <dt>原文怎么说</dt><dd>${esc(e.orig)}</dd>
      <dt>核查结论</dt><dd>${esc(e.verdict)}</dd>
      <dt>实际事实</dt><dd class="fix">${esc(e.fact)}</dd>
      <dt>为什么重要</dt><dd>${esc(e.why)}</dd>
      <dt>影响</dt><dd class="imp">${esc(e.impact)}</dd>
    </dl></div>`).join('');

  $('#verified').innerHTML = `<table><thead><tr><th>核查项</th><th>来源</th><th>结果</th></tr></thead><tbody>` +
    SITE.verified.map(v => `<tr><td><b>${esc(v.item)}</b></td><td style="color:var(--tx2)">${esc(v.src)}</td><td style="color:var(--tx2)">${esc(v.r)}</td></tr>`).join('') +
    `</tbody></table>`;

  /* ---------- 结语 ---------- */
  $('#closing').innerHTML = SITE.closing.map(c => `<div class="cl"><h4>${esc(c.t)}</h4><p>${esc(c.d)}</p></div>`).join('');

  /* ---------- 核验状态 ---------- */
  const V = SITE.verif;
  $('#vNote').textContent = V.note;
  $('#vTotal').textContent = V.bot.length + V.net.length + V.src.length;
  $('#cBot').textContent = V.bot.length;
  $('#cNet').textContent = V.net.length;

  const vRow = x => `<tr><td><b>${esc(x.n)}</b></td><td>第 ${x.m} 月</td>
    <td><a href="${esc(x.u)}" target="_blank" rel="noopener noreferrer" style="word-break:break-all;font-size:12.5px">${esc(x.u)}</a></td></tr>`;
  $('#tblBot').innerHTML = `<table><thead><tr><th>资源</th><th>归属</th><th>链接</th></tr></thead><tbody>` +
    V.bot.map(vRow).join('') + `</tbody></table>`;
  $('#tblNet').innerHTML = `<table><thead><tr><th>资源</th><th>归属</th><th>链接</th></tr></thead><tbody>` +
    V.net.map(vRow).join('') + `</tbody></table>`;
  $('#tblSrc').innerHTML = `<table><thead><tr><th>资源</th><th>归属</th><th>原文的说法</th></tr></thead><tbody>` +
    V.src.map(x => `<tr><td><b>${esc(x.n)}</b></td><td>第 ${x.m} 月</td>
      <td style="color:var(--tx2)">${esc(x.note || '—')}</td></tr>`).join('') + `</tbody></table>`;

  $('#prov').innerHTML = SITE.provenance.map(p => `<div class="card" style="margin-bottom:12px">
    <div style="display:flex;align-items:center;gap:11px;margin-bottom:11px;flex-wrap:wrap">
      <span class="pill ${p.c}" style="font-size:14px;font-weight:800;padding:4px 13px">${esc(p.lv)}</span>
      <b style="font-size:15px">${esc(p.t)}</b></div>
    <ul class="li">${p.items.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('');

  $('#omitted').innerHTML = SITE.omitted.map(o =>
    `<div class="cl"><h4>${esc(o.t)}</h4><p>${esc(o.d)}</p></div>`).join('');

  $('#vtested').textContent = V.testedAt;
  $('#vmethod').textContent = V.method;

  /* ---------- 导航高亮 ---------- */
  const secs = Array.from(document.querySelectorAll('section[id]'));
  const links = Array.from(document.querySelectorAll('nav a.n'));
  const io = new IntersectionObserver(es => {
    es.forEach(en => {
      if (!en.isIntersecting) return;
      links.forEach(l => l.classList.toggle('on', l.getAttribute('href') === '#' + en.target.id));
    });
  }, { rootMargin: '-56px 0px -70% 0px' });
  secs.forEach(s => io.observe(s));

  $('#yr').textContent = new Date().getFullYear();
})();
