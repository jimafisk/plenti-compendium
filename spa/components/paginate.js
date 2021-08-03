/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	destroy_each,
	detach,
	element,
	empty,
	init,
	insert,
	noop,
	safe_not_equal,
	space,
	text
} from '../web_modules/svelte/internal/index.mjs';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	child_ctx[6] = i;
	return child_ctx;
}

// (22:2) {:else}
function create_else_block_2(ctx) {
	let button0;
	let i0;
	let t;
	let button1;
	let i1;

	return {
		c() {
			button0 = element("button");
			i0 = element("i");
			t = space();
			button1 = element("button");
			i1 = element("i");
			this.h();
		},
		l(nodes) {
			button0 = claim_element(nodes, "BUTTON", { class: true, "aria-label": true });
			var button0_nodes = children(button0);
			i0 = claim_element(button0_nodes, "I", { class: true });
			children(i0).forEach(detach);
			button0_nodes.forEach(detach);
			t = claim_space(nodes);
			button1 = claim_element(nodes, "BUTTON", { class: true, "aria-label": true });
			var button1_nodes = children(button1);
			i1 = claim_element(button1_nodes, "I", { class: true });
			children(i1).forEach(detach);
			button1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(i0, "class", "las la-angle-double-left font-black svelte-1dj33wt");
			attr(button0, "class", "btn-round-inactive m-0.5");
			attr(button0, "aria-label", "First");
			attr(i1, "class", "las la-angle-left font-black svelte-1dj33wt");
			attr(button1, "class", "btn-round-inactive m-0.5");
			attr(button1, "aria-label", "Previous");
		},
		m(target, anchor) {
			insert(target, button0, anchor);
			append(button0, i0);
			insert(target, t, anchor);
			insert(target, button1, anchor);
			append(button1, i1);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(button0);
			if (detaching) detach(t);
			if (detaching) detach(button1);
		}
	};
}

// (11:2) {#if currentPage - 1 > 0}
function create_if_block_2(ctx) {
	let a0;
	let i0;
	let a0_href_value;
	let t;
	let a1;
	let i1;
	let a1_href_value;

	return {
		c() {
			a0 = element("a");
			i0 = element("i");
			t = space();
			a1 = element("a");
			i1 = element("i");
			this.h();
		},
		l(nodes) {
			a0 = claim_element(nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a0_nodes = children(a0);
			i0 = claim_element(a0_nodes, "I", { class: true });
			children(i0).forEach(detach);
			a0_nodes.forEach(detach);
			t = claim_space(nodes);

			a1 = claim_element(nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a1_nodes = children(a1);
			i1 = claim_element(a1_nodes, "I", { class: true });
			children(i1).forEach(detach);
			a1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(i0, "class", "las la-angle-double-left font-black svelte-1dj33wt");
			attr(a0, "href", a0_href_value = "" + (/*pagePath*/ ctx[2] + "1"));
			attr(a0, "class", "btn-round m-0.5");
			attr(a0, "aria-label", "First");
			attr(i1, "class", "las la-angle-left font-black svelte-1dj33wt");
			attr(a1, "href", a1_href_value = "" + (/*pagePath*/ ctx[2] + Math.max(/*currentPage*/ ctx[0] - 1, 1)));
			attr(a1, "class", "btn-round m-0.5");
			attr(a1, "aria-label", "Previous");
		},
		m(target, anchor) {
			insert(target, a0, anchor);
			append(a0, i0);
			insert(target, t, anchor);
			insert(target, a1, anchor);
			append(a1, i1);
		},
		p(ctx, dirty) {
			if (dirty & /*pagePath*/ 4 && a0_href_value !== (a0_href_value = "" + (/*pagePath*/ ctx[2] + "1"))) {
				attr(a0, "href", a0_href_value);
			}

			if (dirty & /*pagePath, currentPage*/ 5 && a1_href_value !== (a1_href_value = "" + (/*pagePath*/ ctx[2] + Math.max(/*currentPage*/ ctx[0] - 1, 1)))) {
				attr(a1, "href", a1_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(a0);
			if (detaching) detach(t);
			if (detaching) detach(a1);
		}
	};
}

// (37:4) {:else}
function create_else_block_1(ctx) {
	let a;
	let t_value = /*i*/ ctx[6] + 1 + "";
	let t;
	let a_href_value;

	return {
		c() {
			a = element("a");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			a = claim_element(nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, t_value);
			a_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "class", "btn-round m-0.5");
			attr(a, "href", a_href_value = "" + (/*pagePath*/ ctx[2] + (/*i*/ ctx[6] + 1)));
		},
		m(target, anchor) {
			insert(target, a, anchor);
			append(a, t);
		},
		p(ctx, dirty) {
			if (dirty & /*pagePath*/ 4 && a_href_value !== (a_href_value = "" + (/*pagePath*/ ctx[2] + (/*i*/ ctx[6] + 1)))) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(a);
		}
	};
}

// (35:4) {#if currentPage == i + 1}
function create_if_block_1(ctx) {
	let button;
	let t_value = /*i*/ ctx[6] + 1 + "";
	let t;

	return {
		c() {
			button = element("button");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t = claim_text(button_nodes, t_value);
			button_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(button, "class", "btn-round-active m-0.5");
		},
		m(target, anchor) {
			insert(target, button, anchor);
			append(button, t);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(button);
		}
	};
}

// (34:2) {#each Array(totalPages) as _, i}
function create_each_block(ctx) {
	let if_block_anchor;

	function select_block_type_1(ctx, dirty) {
		if (/*currentPage*/ ctx[0] == /*i*/ ctx[6] + 1) return create_if_block_1;
		return create_else_block_1;
	}

	let current_block_type = select_block_type_1(ctx, -1);
	let if_block = current_block_type(ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = empty();
		},
		l(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type_1(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d(detaching) {
			if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (61:2) {:else}
function create_else_block(ctx) {
	let button0;
	let i0;
	let t;
	let button1;
	let i1;

	return {
		c() {
			button0 = element("button");
			i0 = element("i");
			t = space();
			button1 = element("button");
			i1 = element("i");
			this.h();
		},
		l(nodes) {
			button0 = claim_element(nodes, "BUTTON", { class: true, "aria-label": true });
			var button0_nodes = children(button0);
			i0 = claim_element(button0_nodes, "I", { class: true });
			children(i0).forEach(detach);
			button0_nodes.forEach(detach);
			t = claim_space(nodes);
			button1 = claim_element(nodes, "BUTTON", { class: true, "aria-label": true });
			var button1_nodes = children(button1);
			i1 = claim_element(button1_nodes, "I", { class: true });
			children(i1).forEach(detach);
			button1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(i0, "class", "las la-angle-right font-black svelte-1dj33wt");
			attr(button0, "class", "btn-round-inactive m-0.5");
			attr(button0, "aria-label", "Next");
			attr(i1, "class", "las la-angle-double-right font-black svelte-1dj33wt");
			attr(button1, "class", "btn-round-inactive m-0.5");
			attr(button1, "aria-label", "Last");
		},
		m(target, anchor) {
			insert(target, button0, anchor);
			append(button0, i0);
			insert(target, t, anchor);
			insert(target, button1, anchor);
			append(button1, i1);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(button0);
			if (detaching) detach(t);
			if (detaching) detach(button1);
		}
	};
}

// (47:2) {#if currentPage + 1 <= totalPages}
function create_if_block(ctx) {
	let a0;
	let i0;
	let a0_href_value;
	let t;
	let a1;
	let i1;
	let a1_href_value;

	return {
		c() {
			a0 = element("a");
			i0 = element("i");
			t = space();
			a1 = element("a");
			i1 = element("i");
			this.h();
		},
		l(nodes) {
			a0 = claim_element(nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a0_nodes = children(a0);
			i0 = claim_element(a0_nodes, "I", { class: true });
			children(i0).forEach(detach);
			a0_nodes.forEach(detach);
			t = claim_space(nodes);

			a1 = claim_element(nodes, "A", {
				href: true,
				class: true,
				"aria-label": true
			});

			var a1_nodes = children(a1);
			i1 = claim_element(a1_nodes, "I", { class: true });
			children(i1).forEach(detach);
			a1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(i0, "class", "las la-angle-right font-black svelte-1dj33wt");
			attr(a0, "href", a0_href_value = "" + (/*pagePath*/ ctx[2] + Math.min(/*currentPage*/ ctx[0] + 1, /*totalPages*/ ctx[1])));
			attr(a0, "class", "btn-round m-0.5");
			attr(a0, "aria-label", "Next");
			attr(i1, "class", "las la-angle-double-right font-black svelte-1dj33wt");
			attr(a1, "href", a1_href_value = "" + (/*pagePath*/ ctx[2] + /*totalPages*/ ctx[1]));
			attr(a1, "class", "btn-round m-0.5");
			attr(a1, "aria-label", "Last");
		},
		m(target, anchor) {
			insert(target, a0, anchor);
			append(a0, i0);
			insert(target, t, anchor);
			insert(target, a1, anchor);
			append(a1, i1);
		},
		p(ctx, dirty) {
			if (dirty & /*pagePath, currentPage, totalPages*/ 7 && a0_href_value !== (a0_href_value = "" + (/*pagePath*/ ctx[2] + Math.min(/*currentPage*/ ctx[0] + 1, /*totalPages*/ ctx[1])))) {
				attr(a0, "href", a0_href_value);
			}

			if (dirty & /*pagePath, totalPages*/ 6 && a1_href_value !== (a1_href_value = "" + (/*pagePath*/ ctx[2] + /*totalPages*/ ctx[1]))) {
				attr(a1, "href", a1_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(a0);
			if (detaching) detach(t);
			if (detaching) detach(a1);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let t0;
	let t1;

	function select_block_type(ctx, dirty) {
		if (/*currentPage*/ ctx[0] - 1 > 0) return create_if_block_2;
		return create_else_block_2;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block0 = current_block_type(ctx);
	let each_value = Array(/*totalPages*/ ctx[1]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	function select_block_type_2(ctx, dirty) {
		if (/*currentPage*/ ctx[0] + 1 <= /*totalPages*/ ctx[1]) return create_if_block;
		return create_else_block;
	}

	let current_block_type_1 = select_block_type_2(ctx, -1);
	let if_block1 = current_block_type_1(ctx);

	return {
		c() {
			div = element("div");
			if_block0.c();
			t0 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t1 = space();
			if_block1.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if_block0.l(div_nodes);
			t0 = claim_space(div_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			t1 = claim_space(div_nodes);
			if_block1.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "flex pagination text-center justify-center");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			if_block0.m(div, null);
			append(div, t0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			append(div, t1);
			if_block1.m(div, null);
		},
		p(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(div, t0);
				}
			}

			if (dirty & /*currentPage, pagePath, totalPages*/ 7) {
				each_value = Array(/*totalPages*/ ctx[1]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, t1);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (current_block_type_1 === (current_block_type_1 = select_block_type_2(ctx, dirty)) && if_block1) {
				if_block1.p(ctx, dirty);
			} else {
				if_block1.d(1);
				if_block1 = current_block_type_1(ctx);

				if (if_block1) {
					if_block1.c();
					if_block1.m(div, null);
				}
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
			if_block0.d();
			destroy_each(each_blocks, detaching);
			if_block1.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { currentPage } = $$props, { totalPages } = $$props, { page } = $$props;
	let { pagePath = page === "projs" ? "projs/" : "" } = $$props;

	$$self.$$set = $$props => {
		if ("currentPage" in $$props) $$invalidate(0, currentPage = $$props.currentPage);
		if ("totalPages" in $$props) $$invalidate(1, totalPages = $$props.totalPages);
		if ("page" in $$props) $$invalidate(3, page = $$props.page);
		if ("pagePath" in $$props) $$invalidate(2, pagePath = $$props.pagePath);
	};

	return [currentPage, totalPages, pagePath, page];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			currentPage: 0,
			totalPages: 1,
			page: 3,
			pagePath: 2
		});
	}
}

export default Component;