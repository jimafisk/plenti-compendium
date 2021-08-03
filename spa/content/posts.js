/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	element,
	init,
	insert,
	mount_component,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out
} from '../web_modules/svelte/internal/index.mjs';

import Aside from '../components/aside.js';

// Ogp (Open Graph Protocol): SEO for social networks
import Ogp from '../components/openGraph.js';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[17] = list[i];
	child_ctx[19] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[20] = list[i];
	child_ctx[19] = i;
	return child_ctx;
}

// (64:22) {#if i < categories.length - 1}
function create_if_block_1(ctx) {
	let t;

	return {
		c() {
			t = text(",");
		},
		l(nodes) {
			t = claim_text(nodes, ",");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (62:12) {#each categories as catg, i}
function create_each_block_1(ctx) {
	let a;
	let t0_value = /*catg*/ ctx[20] + "";
	let t0;
	let t1;
	let a_href_value;
	let if_block = /*i*/ ctx[19] < /*categories*/ ctx[9].length - 1 && create_if_block_1(ctx);

	return {
		c() {
			a = element("a");
			t0 = text(t0_value);
			if (if_block) if_block.c();
			t1 = space();
			this.h();
		},
		l(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			if (if_block) if_block.l(a_nodes);
			t1 = claim_space(a_nodes);
			a_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", a_href_value = "catgs/" + /*catg*/ ctx[20]);
			attr(a, "class", "ml-1");
		},
		m(target, anchor) {
			insert(target, a, anchor);
			append(a, t0);
			if (if_block) if_block.m(a, null);
			append(a, t1);
		},
		p(ctx, dirty) {
			if (dirty & /*categories*/ 512 && t0_value !== (t0_value = /*catg*/ ctx[20] + "")) set_data(t0, t0_value);

			if (/*i*/ ctx[19] < /*categories*/ ctx[9].length - 1) {
				if (if_block) {
					
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(a, t1);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*categories*/ 512 && a_href_value !== (a_href_value = "catgs/" + /*catg*/ ctx[20])) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(a);
			if (if_block) if_block.d();
		}
	};
}

// (72:21) {#if i < tags.length - 1}
function create_if_block(ctx) {
	let t;

	return {
		c() {
			t = text(",");
		},
		l(nodes) {
			t = claim_text(nodes, ",");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (70:12) {#each tags as tag, i}
function create_each_block(ctx) {
	let a;
	let t0_value = /*tag*/ ctx[17] + "";
	let t0;
	let t1;
	let a_href_value;
	let if_block = /*i*/ ctx[19] < /*tags*/ ctx[10].length - 1 && create_if_block(ctx);

	return {
		c() {
			a = element("a");
			t0 = text(t0_value);
			if (if_block) if_block.c();
			t1 = space();
			this.h();
		},
		l(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			if (if_block) if_block.l(a_nodes);
			t1 = claim_space(a_nodes);
			a_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", a_href_value = "tags/" + /*tag*/ ctx[17]);
			attr(a, "class", "ml-1");
		},
		m(target, anchor) {
			insert(target, a, anchor);
			append(a, t0);
			if (if_block) if_block.m(a, null);
			append(a, t1);
		},
		p(ctx, dirty) {
			if (dirty & /*tags*/ 1024 && t0_value !== (t0_value = /*tag*/ ctx[17] + "")) set_data(t0, t0_value);

			if (/*i*/ ctx[19] < /*tags*/ ctx[10].length - 1) {
				if (if_block) {
					
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(a, t1);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*tags*/ 1024 && a_href_value !== (a_href_value = "tags/" + /*tag*/ ctx[17])) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(a);
			if (if_block) if_block.d();
		}
	};
}

function create_fragment(ctx) {
	let section;
	let ogp;
	let t0;
	let div0;
	let t1;
	let div5;
	let div4;
	let div1;
	let img;
	let img_src_value;
	let img_alt_value;
	let t2;
	let span;
	let raw0_value = /*image*/ ctx[5].citation.replaceAll("<a ", "<a target='blank' rel='noopener noreferrer'") + "";
	let t3;
	let div2;
	let h1;
	let t4;
	let t5;
	let ul;
	let li0;
	let i;
	let t6;
	let a;
	let t7_value = /*author*/ ctx[6].name + "";
	let t7;
	let a_href_value;
	let t8;
	let li1;
	let t9;
	let t10;
	let t11;
	let li2;
	let t12;
	let t13;
	let t14;
	let li3;
	let t15;
	let t16;
	let li4;
	let t17;
	let t18;
	let p;
	let t19;
	let div3;
	let aside;
	let t20;
	let div6;
	let current;

	ogp = new Ogp({
			props: {
				idxContent: /*idxContent*/ ctx[0],
				title: /*title*/ ctx[4],
				desc: /*desc*/ ctx[13],
				image: /*image*/ ctx[5],
				env: /*env*/ ctx[2],
				path: /*path*/ ctx[12]
			}
		});

	let each_value_1 = /*categories*/ ctx[9];
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let each_value = /*tags*/ ctx[10];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	aside = new Aside({
			props: {
				allPosts: /*allPosts*/ ctx[1],
				socialLinks: /*socialLinks*/ ctx[11]
			}
		});

	return {
		c() {
			section = element("section");
			create_component(ogp.$$.fragment);
			t0 = space();
			div0 = element("div");
			t1 = space();
			div5 = element("div");
			div4 = element("div");
			div1 = element("div");
			img = element("img");
			t2 = space();
			span = element("span");
			t3 = space();
			div2 = element("div");
			h1 = element("h1");
			t4 = text(/*title*/ ctx[4]);
			t5 = space();
			ul = element("ul");
			li0 = element("li");
			i = element("i");
			t6 = space();
			a = element("a");
			t7 = text(t7_value);
			t8 = space();
			li1 = element("li");
			t9 = text("Created : ");
			t10 = text(/*dateCreated*/ ctx[7]);
			t11 = space();
			li2 = element("li");
			t12 = text("Updated : ");
			t13 = text(/*dateModified*/ ctx[8]);
			t14 = space();
			li3 = element("li");
			t15 = text("Categories:\n            ");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t16 = space();
			li4 = element("li");
			t17 = text("Tags:\n            ");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t18 = space();
			p = element("p");
			t19 = space();
			div3 = element("div");
			create_component(aside.$$.fragment);
			t20 = space();
			div6 = element("div");
			this.h();
		},
		l(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			claim_component(ogp.$$.fragment, section_nodes);
			t0 = claim_space(section_nodes);
			div0 = claim_element(section_nodes, "DIV", { class: true });
			children(div0).forEach(detach);
			t1 = claim_space(section_nodes);
			div5 = claim_element(section_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { class: true, src: true, alt: true });
			t2 = claim_space(div1_nodes);
			span = claim_element(div1_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			span_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t3 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			h1 = claim_element(div2_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t4 = claim_text(h1_nodes, /*title*/ ctx[4]);
			h1_nodes.forEach(detach);
			t5 = claim_space(div2_nodes);
			ul = claim_element(div2_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			i = claim_element(li0_nodes, "I", { class: true });
			children(i).forEach(detach);
			t6 = claim_space(li0_nodes);
			a = claim_element(li0_nodes, "A", { href: true });
			var a_nodes = children(a);
			t7 = claim_text(a_nodes, t7_value);
			a_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t8 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			t9 = claim_text(li1_nodes, "Created : ");
			t10 = claim_text(li1_nodes, /*dateCreated*/ ctx[7]);
			li1_nodes.forEach(detach);
			t11 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", { class: true });
			var li2_nodes = children(li2);
			t12 = claim_text(li2_nodes, "Updated : ");
			t13 = claim_text(li2_nodes, /*dateModified*/ ctx[8]);
			li2_nodes.forEach(detach);
			t14 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", { class: true });
			var li3_nodes = children(li3);
			t15 = claim_text(li3_nodes, "Categories:\n            ");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(li3_nodes);
			}

			li3_nodes.forEach(detach);
			t16 = claim_space(ul_nodes);
			li4 = claim_element(ul_nodes, "LI", { class: true });
			var li4_nodes = children(li4);
			t17 = claim_text(li4_nodes, "Tags:\n            ");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(li4_nodes);
			}

			li4_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			t18 = claim_space(div2_nodes);
			p = claim_element(div2_nodes, "P", {});
			var p_nodes = children(p);
			p_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t19 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			claim_component(aside.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t20 = claim_space(section_nodes);
			div6 = claim_element(section_nodes, "DIV", { class: true });
			children(div6).forEach(detach);
			section_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "w-0 md:w-1/12 xl:w-2/12");
			attr(img, "class", "rounded-lg overflow-hidden w-full h-screen-70 object-cover object-center");
			if (img.src !== (img_src_value = "assets/posts/" + /*image*/ ctx[5].src)) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = /*image*/ ctx[5].alt);
			attr(span, "class", "text-meta");
			attr(div1, "class", "relative mb-8 w-full");
			attr(h1, "class", "header mb-2");
			attr(i, "class", "las la-user-astronaut text-base relative");
			attr(a, "href", a_href_value = /*author*/ ctx[6].url);
			attr(li0, "class", "px-1 inline-flex");
			attr(li1, "class", "px-1 inline-flex");
			attr(li2, "class", "px-1 inline-flex");
			attr(li3, "class", "px-1 inline-flex");
			attr(li4, "class", "px-1 inline-flex");
			attr(ul, "class", "text-meta flex flex-wrap mb-4");
			attr(div2, "class", "w-full md:w-9/12 mb-5 sm:mb-0 px-0 md:pr-10");
			attr(div3, "class", "w-full md:w-3/12 mb-5 mb-lg-0 px-0");
			attr(div4, "class", "row flex flex-wrap");
			attr(div5, "class", "w-full md:w-10/12 xl:w-8/12 px-2 md:px-0");
			attr(div6, "class", "w-0 md:w-1/12 xl:w-2/12");
			attr(section, "class", "section flex flex-wrap items-center justify-between py-6 sm:py-16");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			mount_component(ogp, section, null);
			append(section, t0);
			append(section, div0);
			append(section, t1);
			append(section, div5);
			append(div5, div4);
			append(div4, div1);
			append(div1, img);
			append(div1, t2);
			append(div1, span);
			span.innerHTML = raw0_value;
			append(div4, t3);
			append(div4, div2);
			append(div2, h1);
			append(h1, t4);
			append(div2, t5);
			append(div2, ul);
			append(ul, li0);
			append(li0, i);
			append(li0, t6);
			append(li0, a);
			append(a, t7);
			append(ul, t8);
			append(ul, li1);
			append(li1, t9);
			append(li1, t10);
			append(ul, t11);
			append(ul, li2);
			append(li2, t12);
			append(li2, t13);
			append(ul, t14);
			append(ul, li3);
			append(li3, t15);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(li3, null);
			}

			append(ul, t16);
			append(ul, li4);
			append(li4, t17);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(li4, null);
			}

			append(div2, t18);
			append(div2, p);
			p.innerHTML = /*articleBody*/ ctx[3];
			append(div4, t19);
			append(div4, div3);
			mount_component(aside, div3, null);
			append(section, t20);
			append(section, div6);
			current = true;
		},
		p(ctx, [dirty]) {
			const ogp_changes = {};
			if (dirty & /*idxContent*/ 1) ogp_changes.idxContent = /*idxContent*/ ctx[0];
			if (dirty & /*title*/ 16) ogp_changes.title = /*title*/ ctx[4];
			if (dirty & /*image*/ 32) ogp_changes.image = /*image*/ ctx[5];
			if (dirty & /*env*/ 4) ogp_changes.env = /*env*/ ctx[2];
			ogp.$set(ogp_changes);

			if (!current || dirty & /*image*/ 32 && img.src !== (img_src_value = "assets/posts/" + /*image*/ ctx[5].src)) {
				attr(img, "src", img_src_value);
			}

			if (!current || dirty & /*image*/ 32 && img_alt_value !== (img_alt_value = /*image*/ ctx[5].alt)) {
				attr(img, "alt", img_alt_value);
			}

			if ((!current || dirty & /*image*/ 32) && raw0_value !== (raw0_value = /*image*/ ctx[5].citation.replaceAll("<a ", "<a target='blank' rel='noopener noreferrer'") + "")) span.innerHTML = raw0_value;;
			if (!current || dirty & /*title*/ 16) set_data(t4, /*title*/ ctx[4]);
			if ((!current || dirty & /*author*/ 64) && t7_value !== (t7_value = /*author*/ ctx[6].name + "")) set_data(t7, t7_value);

			if (!current || dirty & /*author*/ 64 && a_href_value !== (a_href_value = /*author*/ ctx[6].url)) {
				attr(a, "href", a_href_value);
			}

			if (!current || dirty & /*dateCreated*/ 128) set_data(t10, /*dateCreated*/ ctx[7]);
			if (!current || dirty & /*dateModified*/ 256) set_data(t13, /*dateModified*/ ctx[8]);

			if (dirty & /*categories*/ 512) {
				each_value_1 = /*categories*/ ctx[9];
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(li3, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_1.length;
			}

			if (dirty & /*tags*/ 1024) {
				each_value = /*tags*/ ctx[10];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(li4, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (!current || dirty & /*articleBody*/ 8) p.innerHTML = /*articleBody*/ ctx[3];;
			const aside_changes = {};
			if (dirty & /*allPosts*/ 2) aside_changes.allPosts = /*allPosts*/ ctx[1];
			aside.$set(aside_changes);
		},
		i(local) {
			if (current) return;
			transition_in(ogp.$$.fragment, local);
			transition_in(aside.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(ogp.$$.fragment, local);
			transition_out(aside.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(section);
			destroy_component(ogp);
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
			destroy_component(aside);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { idxContent } = $$props,
		{ allPosts } = $$props,
		{ content } = $$props,
		{ env } = $$props;

	let { articleBody } = $$props,
		{ title } = $$props,
		{ image } = $$props,
		{ author } = $$props,
		{ dateCreated } = $$props,
		{ dateModified } = $$props,
		{ categories } = $$props,
		{ tags } = $$props;

	let socialLinks = idxContent.socialLinks;
	let path = content.path;

	// Ogp description length - setting to last word on-or-before 110 characters
	let desc_start = articleBody.indexOf("<p>");

	let desc_end = desc_start + 110;
	let desc = articleBody.substring(desc_start, Math.min(desc_end, articleBody.substring(0, desc_end).lastIndexOf(" ")));

	$$self.$$set = $$props => {
		if ("idxContent" in $$props) $$invalidate(0, idxContent = $$props.idxContent);
		if ("allPosts" in $$props) $$invalidate(1, allPosts = $$props.allPosts);
		if ("content" in $$props) $$invalidate(14, content = $$props.content);
		if ("env" in $$props) $$invalidate(2, env = $$props.env);
		if ("articleBody" in $$props) $$invalidate(3, articleBody = $$props.articleBody);
		if ("title" in $$props) $$invalidate(4, title = $$props.title);
		if ("image" in $$props) $$invalidate(5, image = $$props.image);
		if ("author" in $$props) $$invalidate(6, author = $$props.author);
		if ("dateCreated" in $$props) $$invalidate(7, dateCreated = $$props.dateCreated);
		if ("dateModified" in $$props) $$invalidate(8, dateModified = $$props.dateModified);
		if ("categories" in $$props) $$invalidate(9, categories = $$props.categories);
		if ("tags" in $$props) $$invalidate(10, tags = $$props.tags);
	};

	return [
		idxContent,
		allPosts,
		env,
		articleBody,
		title,
		image,
		author,
		dateCreated,
		dateModified,
		categories,
		tags,
		socialLinks,
		path,
		desc,
		content
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			idxContent: 0,
			allPosts: 1,
			content: 14,
			env: 2,
			articleBody: 3,
			title: 4,
			image: 5,
			author: 6,
			dateCreated: 7,
			dateModified: 8,
			categories: 9,
			tags: 10
		});
	}
}

export default Component;